import {useFormField} from "./useFormField";
import {useAppDispatch, usePostRequestMutation, addNotification, NotificationType} from "@/app/redux";
import {useCallback, useEffect, useMemo, useRef} from "react";
import {Product} from "@/entities/product";
import {NOTIFICATION_DURATION_MS} from "@/app/config";
import {FormData, FormFieldReturn} from "@/features/feedback";

export const useForm = () => {
    const [postRequest, {isSuccess, isLoading, isError}] = usePostRequestMutation();
    const isRequested = useRef<boolean>(false);
    const dispatch = useAppDispatch();

    const name = useFormField(/^.{3,255}$/i);
    const mail = useFormField(/^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i);
    const phone = useFormField(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{5}$/i);

    const dataRef = useRef<{
        name: FormFieldReturn,
        mail: FormFieldReturn,
        phone: FormFieldReturn
    }>();

    const data: FormData = useMemo(() => {
        dataRef.current = {name, mail, phone};
        return dataRef.current;
    }, [name, mail, phone]);

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
            isRequested.current = false;
        }
    }, [isError, dispatch, createNotification]);

    useEffect(() => {
        if (isSuccess && isRequested.current) {
            createNotification({
                message: 'Спасибо за обращение. Мы свяжемся с вами при первой возможности',
                type: 'success'
            });
            isRequested.current = false;
        }
    }, [isSuccess, dispatch, createNotification]);

    const requestCall = (product: Product) => {
        if (isLoading) return;

        isRequested.current = true;
        if (!Object.values(dataRef.current).every((value) => value.state == 'correct')) {
            dispatch(addNotification({
                element: 'Некоторые введенные данные не верны. Пожалуйста, перепроверьте информацию',
                type: 'error',
                duration: NOTIFICATION_DURATION_MS
            }));
        } else {
            postRequest({form: dataRef.current, product: product?.id});
        }
    }

    return {requestCall, data, isSuccess};
}