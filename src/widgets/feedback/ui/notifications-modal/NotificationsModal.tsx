import {BaseHTMLAttributes, FC, useEffect, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './NotificationsModal.module.scss';
import {useAppDispatch, useTypedSelector} from "@/app/redux";
import {Notification} from "@/shared/ui-toolkit";
import {removeNotification, selectNotification} from "@/app/redux/features/notification/notificationSlice";

interface NotificationsModalProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const NotificationsModal: FC<NotificationsModalProps> = ({className, ...props}: NotificationsModalProps) => {
    const notification = useTypedSelector(selectNotification);
    const timeout = useRef<NodeJS.Timeout>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!notification) return;

        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            dispatch(removeNotification())
        }, notification.duration)
    }, [notification, dispatch]);

    return (
        <div className={`${classes.notificationsModal__wrapper} ${className}`} {...props}>
            <div className={`${classes.notificationsModal__content}`}>
                {notification
                    ? (
                        <div className={`${classes.notificationsModal__item}`}>
                            <Notification data={{type: notification.type, content: notification.element}}/>
                        </div>
                    )
                    : undefined
                }
            </div>
        </div>
    );
};