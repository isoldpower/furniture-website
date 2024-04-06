import {BaseHTMLAttributes, FC, useEffect} from "react";
import '@/app/scss/main.scss';
import classes from './OrderProjectModal.module.scss';
import {CallbackForm} from "@/entities/layout";
import {closeWindow, useAppDispatch, useTypedSelector} from "@/app/redux";
import {selectData} from "@/app/redux/features/modal/modalSlice";
import {AdaptiveLink, Button, InputField} from "@/shared/ui";
import {websiteRoutes} from "@/shared/lib";
import {useForm} from "@/features";
import {Product} from "@/entities/product";
import {ProductCallbackForm} from "@/widgets/layout/ui/product-callback-form/ProductCallbackForm";


interface OrderProjectModalProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const OrderProjectModal: FC<OrderProjectModalProps> = ({className, ...props}: OrderProjectModalProps) => {
    const form = useForm();
    const data = useTypedSelector((state) => selectData(state, 'order'));
    const dispatch = useAppDispatch();

    const close = () => {
        dispatch(closeWindow('order'));
    }

    const completeOrder = () => {
        form.requestCall(data as Product);
        console.log(data as Product);
    }

    useEffect(() => {
        if (form.isSuccess) close();
    }, [form.isSuccess]);

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