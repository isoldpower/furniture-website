import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './CallbackForm.module.scss';

type CallbackFormProps = {
    children: ReactNode;
    hint: ReactNode;
    action: ReactNode;
}

export const CallbackForm: FC<CallbackFormProps> = ({children, hint, action}: CallbackFormProps) => {
    return (
        <div className={`${classes.callbackForm__wrapper} cc-width-1of1 cc-border-radius-1`}>
            <div className={`${classes.callbackForm__content} cc-p-7 cc-width-1of1 cc-grid cc-gap-7`}>
                <div className={`${classes.callbackForm__fields} cc-grid cc-gap-7`}>
                    {children}
                </div>
                <div className={`${classes.callbackForm__hint} cc-fs-050`}>
                    {hint}
                </div>
                {action}
            </div>
        </div>
    );
};