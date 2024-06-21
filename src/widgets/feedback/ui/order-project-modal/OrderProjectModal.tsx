import {FC, useCallback, useEffect} from "react";
import '@/app/scss/main.scss';
import classes from './OrderProjectModal.module.scss';
import {closeWindow, useAppDispatch, useTypedSelector} from "@/app/redux";
import {selectData} from "@/app/redux/features/modal/modalSlice";
import {Product} from "@/entities/product";
import {useForm} from "@/features/feedback";
import {ProductCallbackForm} from "@/widgets/feedback";

export const OrderProjectModal: FC = () => {
    const form = useForm();
    const data = useTypedSelector((state) => selectData(state, 'order'));
    const dispatch = useAppDispatch();

    const close = useCallback(() => {
        dispatch(closeWindow('order'));
    }, [dispatch])

    const completeOrder = useCallback(() => {
        form.requestCall(data as Product);
    }, [data, form]);

    useEffect(() => {
        if (form.isSuccess) close();
    }, [form.isSuccess, close]);

    return (
        <div className={`${classes.orderProjectModal__wrapper}`}>
            <div className={`${classes.orderProjectModal__content}`}>
                <div className={`${classes.orderProjectModal__back}`} onClick={close}/>
                <div className={`${classes.orderProjectModal__container} cc-main-gutter`}>
                    <ProductCallbackForm form={form} onClick={completeOrder} />
                </div>
            </div>
        </div>
    );
};