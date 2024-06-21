import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './CallbackSection.module.scss';
import {ProductCallbackForm} from "@/widgets/feedback";
import {useForm} from "@/features/feedback";

export const CallbackSection: FC = () => {
    const form = useForm();

    return (
        <div className={`${classes.callbackSection__content} cc-width-1of1`}>
            <div className={`${classes.callbackSection__headingWrapper}`}>
                <h1 className={`${classes.callbackSection__heading} cc-heading-1`}>
                    Можем перезвонить
                </h1>
                <p className={`${classes.callbackSection__paragraph} cc-pt-9`}>Свяжемся с вами — когда вам будет удобно</p>
            </div>
            <div className={`${classes.callbackSection__formWrapper} cc-width-1of1`}>
                <ProductCallbackForm form={form} onClick={() => form.requestCall(undefined)} />
            </div>
        </div>
    );
};