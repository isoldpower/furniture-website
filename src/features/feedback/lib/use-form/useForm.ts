import {useFormField} from "./useFormField";
import {useAppDispatch, usePostRequestMutation} from "@/app/redux";
import {useCallback, useEffect, useRef} from "react";
import {addNotification} from "@/app/redux/features/notification/notificationSlice";
import {Product} from "@/entities/product";
import {NOTIFICATION_DURATION_MS} from "@/app/config/constants/notification";
import {NotificationType} from "@/app/redux/features/notification/types";
import {FormData} from "@/features/feedback";

export const useForm = () => {
    const [postRequest, {isSuccess, isLoading, isError}] = usePostRequestMutation();
    const isRequested = useRef<boolean>(false);
    const dispatch = useAppDispatch();

    const data: FormData = {
        name: useFormField(/^.{3,255}$/i),
        mail: useFormField(/^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i),
        phone: useFormField(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{5}$/i)
    }

    const createNotification = useCallback((config: {
        type: NotificationType;
        message: string;
        duration?: number;
    }) => {
        dispatch(addNotification({
            element: config.message,
            type: config.type,
            duration: config.duration ?? NOTIFICATION_DURATION_MS
        }))
    }, [dispatch]);

    useEffect(() => {
        if (isRequested.current && isError) {
            createNotification({
                message: 'Что-то пошло не так. Вероятнее всего, ваше обращение уже у нас',
                type: 'error'
            });
        }
    }, [isError, dispatch, createNotification]);

    useEffect(() => {
        if (isSuccess && !isRequested.current) createNotification({
            message: 'Спасибо за обращение. Мы свяжемся с вами при первой возможности',
            type: 'success'
        });
    }, [isSuccess, dispatch, createNotification]);

    const requestCall = (product: Product) => {
        if (isLoading) return;

        isRequested.current = true;
        if (!Object.values(data).every((value) => {
            return value.state == 'correct'
        })) console.log('false');

        if (data.name.state != 'correct' ||
            data.mail.state != 'correct' ||
            data.phone.state != 'correct')
            dispatch(addNotification({
                element: 'Некоторые введенные данные не верны. Пожалуйста, перепроверьте информацию',
                type: 'error',
                duration: NOTIFICATION_DURATION_MS
            }))
        else postRequest({form: data, product: product?.id});
    }

    return {requestCall, data, isSuccess};
}