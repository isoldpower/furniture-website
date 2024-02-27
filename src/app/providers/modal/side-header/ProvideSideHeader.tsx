import {BaseHTMLAttributes, FC, ReactNode, useEffect} from "react";
import '@/app/scss/main.scss';
import classes from './ProvideSideHeader.module.scss';
import {closeWindow, openWindow, selectActive, useAppDispatch, useTypedSelector, WindowParams} from "@/app/redux";
import {openModal} from "@/app/redux/features/modal/external/openModal";
import {addToTrack, removeFromTrack} from "@/app/redux/features/modal/modalSlice";

interface ProvideSideHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
    id: string;
    children: ReactNode;
}

export const ProvideSideHeader: FC<ProvideSideHeaderProps> = ({className, ...props}: ProvideSideHeaderProps) => {
    const dispatch = useAppDispatch();
    const isActive = useTypedSelector(selectActive);
    const headerWindow: WindowParams = {
        attributeKey: 'id',
        attributeValue: props.id,
        hiddenClass: classes.hidden
    }

    useEffect(() => {
        dispatch(addToTrack(headerWindow));
        return () => {dispatch(removeFromTrack(headerWindow))};
    }, []);

    useEffect(() => {
        dispatch(isActive ? openWindow(headerWindow) : closeWindow(headerWindow));
    }, [isActive]);

    return (
        <div className={`${classes.provideSideHeader__wrapper} ${className}`} {...props} />
    );
};