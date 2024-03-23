import {BaseHTMLAttributes, FC, ReactNode, useEffect, useMemo} from "react";
import '@/app/scss/main.scss';
import classes from './ModalProvider.module.scss';
import {useAppDispatch, WindowParams} from "@/app/redux";
import {addToTrack, removeFromTrack} from "@/app/redux/features/modal/modalSlice";
import {ModalIdentifier} from "@/app/redux/features/modal/types";

interface ProvideSideHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
    id: string;
    children: ReactNode;
    identifier: ModalIdentifier;
}

export const ModalProvider: FC<ProvideSideHeaderProps> = ({className, identifier, ...props}: ProvideSideHeaderProps) => {
    const dispatch = useAppDispatch();
    const modalWindow = useMemo<WindowParams>(() => ({
        identifier: identifier,
        attributeKey: 'id',
        attributeValue: props.id,
        hiddenClass: classes.hidden
    }), [identifier, props.id]);

    useEffect(() => {
        dispatch(addToTrack(modalWindow));
        return () => {dispatch(removeFromTrack(modalWindow))};
    }, [dispatch, modalWindow]);

    return (
        <div className={`${classes.provideSideHeader__wrapper} ${className}`} {...props} />
    );
};