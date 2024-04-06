import {BaseHTMLAttributes, FC, ReactNode, useEffect, useRef, useState} from "react";
import '@/app/scss/main.scss';
import classes from './NotificationsModal.module.scss';
import {useAppDispatch, useTypedSelector} from "@/app/redux";
import {Notification} from "@/shared/ui";
import {removeNotification, selectNotification} from "@/app/redux/features/notification/notificationSlice";

interface NotificationsModalProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const NotificationsModal: FC<NotificationsModalProps> = ({className, ...props}: NotificationsModalProps) => {
    const notification = useTypedSelector(selectNotification);
    const timeout = useRef<NodeJS.Timeout>();
    const animationClass = useRef<string>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!notification) return;

        clearTimeout(timeout.current);
        animationClass.current = classes.change;
        timeout.current = setTimeout(() => {
            animationClass.current = classes.disappear;
            dispatch(removeNotification())
        }, notification.duration)
    }, [notification]);

    return (
        <div className={`${classes.notificationsModal__wrapper} ${className}`} {...props}>
            <div className={`${classes.notificationsModal__content}`}>
                {notification
                    ? (
                        <div className={`${classes.notificationsModal__item} ${animationClass.current}`} datatype={notification.duration.toString()}>
                            <Notification data={{type: notification.type, content: notification.element}}/>
                        </div>
                    )
                    : <></>
                }
            </div>
        </div>
    );
};