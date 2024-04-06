import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductCallbackForm.module.scss';
import {AdaptiveLink, Button, InputField} from "@/shared/ui";
import {websiteRoutes} from "@/shared/lib";
import {CallbackForm} from "@/entities/layout";
import {UseFormReturn} from "@/features";


interface ProductCallbackFormProps extends BaseHTMLAttributes<HTMLDivElement> {
    form: UseFormReturn;
    onClick: () => void;
}

export const ProductCallbackForm: FC<ProductCallbackFormProps> = ({className, form, onClick, ...props}: ProductCallbackFormProps) => {
    return (
        <CallbackForm className={`cc-main-gutter-content ${className}`} {...props} data={{
            fields: [
                <InputField className={`${classes.callbackSection__field}`} itemType={form.data.name.state}
                            data={{title: 'Ваше имя *'}} key={0} onInput={form.data.name.onInput}
                            placeholder="Александр"/>,
                <InputField className={`${classes.callbackSection__field}`} itemType={form.data.phone.state}
                            data={{title: 'Ваш номер *'}}
                            key={1} onInput={form.data.phone.onInput} placeholder="89995543332"/>,
                <InputField
                    className={`${classes.callbackSection__mailInput} ${classes.callbackSection__field}`}
                    itemType={form.data.mail.state} data={{title: 'Ваша почта *'}} key={2}
                    onInput={form.data.mail.onInput} placeholder="cozycraft@yandex.ru" type="email"/>
            ],
            softText: (
                <div className={`${classes.callbackSection__hint}`}>Нажимая кнопку “Отправить” вы
                    соглашаетесь с&nbsp;
                    <AdaptiveLink className={`${classes.callbackSection__hintAnchor} cc-clr-accent-500`}
                                  to={websiteRoutes.policy}>Политикой конфиденциальности</AdaptiveLink>
                    &nbsp;веб-ресурса
                </div>
            ),
            sendButton: (
                <Button data={{variant: 'accent'}} onClick={onClick} semantic="button">
                    Отправить
                </Button>
            )
        }}/>
    );
};