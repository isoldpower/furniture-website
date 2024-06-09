import {BaseHTMLAttributes, FC, useCallback, useEffect} from "react";
import '@/app/scss/main.scss';
import classes from './OrderProjectModal.module.scss';
import {closeWindow, useAppDispatch, useTypedSelector} from "@/app/redux";
import {selectData} from "@/app/redux/features/modal/modalSlice";
import {Product} from "@/entities/product";
import {ProductCallbackForm} from "@/widgets/layout";
import {useForm} from "@/shared/lib";


interface OrderProjectModalProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const OrderProjectModal: FC<OrderProjectModalProps> = ({className, ...props}: OrderProjectModalProps) => {
    const form = useForm();
    const data = useTypedSelector((state) => selectData(state, 'order'));
    const dispatch = useAppDispatch();

    const close = useCallback(() => {
        dispatch(closeWindow('order'));
    }, [dispatch])

    const completeOrder = () => {
        form.requestCall(data as Product);
    }

    useEffect(() => {
        if (form.isSuccess) close();
    }, [form.isSuccess, close]);

    return (
        <div className={`${classes.orderProjectModal__wrapper} ${className}`} {...props}>
            <div className={`${classes.orderProjectModal__content}`}>
                <div className={`${classes.orderProjectModal__back}`} onClick={close}/>
                <div className={`${classes.orderProjectModal__container} cc-main-gutter`}>
                    <ProductCallbackForm form={form} onClick={completeOrder} />
                </div>
            </div>
        </div>
    );
};