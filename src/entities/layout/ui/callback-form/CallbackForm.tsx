import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CallbackForm.module.scss';
import {CallbackFormData} from "@/entities/layout/model";

interface CallbackFormProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: CallbackFormData;
}

export const CallbackForm: FC<CallbackFormProps> = ({className, data, ...props}: CallbackFormProps) => {
    return (
        <div className={`${classes.callbackForm__wrapper} ${className} cc-width-1of1 cc-border-radius-1`} {...props}>
            <div className={`${classes.callbackForm__content} cc-p-7 cc-width-1of1 cc-grid cc-gap-7`}>
                <div className={`${classes.callbackForm__fields} cc-grid cc-gap-7`}>
                    {data.fields}
                </div>
                <div className={`${classes.callbackForm__hint} cc-fs-050`}>
                    {data.softText}
                </div>
                {data.sendButton}
            </div>
        </div>
    );
};