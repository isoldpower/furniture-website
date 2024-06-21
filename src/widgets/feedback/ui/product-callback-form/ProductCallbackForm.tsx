import {FC, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './ProductCallbackForm.module.scss';
import {AdaptiveLink, Button, InputField} from "@/shared/ui-toolkit";
import {websiteRoutes} from "@/shared/lib";
import {UseFormReturn} from "@/features/feedback";
import {CallbackForm} from "@/entities/feedback";

type ProductCallbackFormProps = {
    form: UseFormReturn;
    onClick: () => void;
}

export const ProductCallbackForm: FC<ProductCallbackFormProps> = ({form, onClick}: ProductCallbackFormProps) => {
    const action = useRef(
        <Button data={{variant: 'accent'}} onClick={onClick} semantic="button">
            Отправить
        </Button>
    );

    const hint = useRef(
        <div className={`${classes.callbackSection__hint}`}>
            Нажимая кнопку “Отправить” вы соглашаетесь с
            <span className={`${classes.callbackSection__hintAnchor} cc-clr-accent-500`}>
                <AdaptiveLink to={websiteRoutes.policy}>&nbsp;Политикой конфиденциальности&nbsp;</AdaptiveLink>
            </span>
            веб-ресурса
        </div>
    );

    return (
        <CallbackForm action={action.current} hint={hint.current}>
            <InputField className={`${classes.callbackSection__field}`} data={{title: 'Ваше имя *'}}
                        itemType={form.data.name.state} key={0} onInput={form.data.name.onInput}
                        placeholder="Александр"/>
            <InputField className={`${classes.callbackSection__field}`} data={{title: 'Ваш номер *'}}
                        itemType={form.data.phone.state}
                        key={1} onInput={form.data.phone.onInput} placeholder="89995543332"/>
            <InputField
                className={`${classes.callbackSection__mailInput} ${classes.callbackSection__field}`}
                data={{title: 'Ваша почта *'}} itemType={form.data.mail.state} key={2}
                onInput={form.data.mail.onInput} placeholder="cozycraft@yandex.ru" type="email"/>
        </CallbackForm>
    );
};