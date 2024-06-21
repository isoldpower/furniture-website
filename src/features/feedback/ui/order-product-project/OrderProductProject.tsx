import {FC, ReactNode, useCallback} from "react";
import '@/app/scss/main.scss';
import {Button} from "@/shared/ui-toolkit";
import {changeData, openWindow, useAppDispatch} from "@/app/redux";
import {Product} from "@/entities/product";

interface OrderProductProjectProps {
    children: ReactNode;
    data?: Product;
}

export const OrderProductProject: FC<OrderProductProjectProps> = ({data, children}: OrderProductProjectProps) => {
    const dispatch = useAppDispatch();

    const openOrder = useCallback(() => {
        dispatch(changeData(['order', data]));
        setTimeout(() => {
            dispatch(openWindow('order'))
        }, 100);
    }, [data, dispatch]);

    return data ? (
        <Button data={{variant: 'accent'}} onClick={() => openOrder()} semantic="button">{children}</Button>
    ) : undefined;
};