import {useFormField} from "./useFormField";
import {FormData} from "@/features";
import {useAppDispatch, usePostRequestMutation} from "@/app/redux";
import {useEffect, useRef} from "react";
import {addNotification} from "@/app/redux/features/notification/notificationSlice";
import {Product} from "@/entities/product";

export const useForm = () => {
    const [postRequest, {isSuccess, isLoading, isError}] = usePostRequestMutation();
    const isRequested = useRef<boolean>(false);
    const dispatch = useAppDispatch();
    const NOTIFICATION_DURATION = 3000;


    useEffect(() => {
        if (!isRequested.current || isError == false) return;

        dispatch(addNotification({
            element: 'Что-то пошло не так. Вероятнее всего, ваше обращение уже у нас',
            type: 'error',
            duration: NOTIFICATION_DURATION
        }))
    }, [isError]);

    useEffect(() => {
        if (!isRequested.current) return;

        if (isSuccess) dispatch(addNotification({
            element: 'Спасибо за обращение. Мы свяжемся с вами при первой возможности',
            type: 'success',
            duration: NOTIFICATION_DURATION
        }));
    }, [isSuccess]);

    const data: FormData = {
        name: useFormField(/^.{3,255}$/i),
        mail: useFormField(/^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i),
        phone: useFormField(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{5}$/i)
    }

    const requestCall = (product: Product) => {
        if (isLoading) return;

        isRequested.current = true;
        if (data.name.state != 'correct' || data.mail.state != 'correct' || data.phone.state != 'correct')
            dispatch(addNotification({
                element: 'Некоторые введенные данные не верны. Пожалуйста, перепроверьте информацию',
                type: 'error',
                duration: NOTIFICATION_DURATION
            }))
        else postRequest({form: data, product: product?.id});
    }

    return {requestCall, data, isSuccess};
}