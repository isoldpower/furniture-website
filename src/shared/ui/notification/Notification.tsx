import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Notification.module.scss';
import {NotificationType} from "@/app/redux/features/notification/types";

interface NotificationData {
    content: ReactNode;
    type?: NotificationType;
}

interface NotificationProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: NotificationData;
}

export const Notification: FC<NotificationProps> = ({className, data, ...props}: NotificationProps) => {
    return (
        <div className={`${classes.notification__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.notification__back}`} itemType={data.type ?? 'overall'}/>
            <div className={`${classes.notification__content} cc-main-gutter-content cc-border-radius-1 cc-p-6`} itemType={data.type ?? 'overall'}>
                {data.content}
            </div>
        </div>
    );
};