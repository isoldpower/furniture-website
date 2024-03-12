import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CallbackSection.module.scss';
import {CallbackForm} from "@/entities";
import {useForm} from "@/features";
import {AdaptiveLink, Button, InputField} from "@/shared/ui";

interface CallbackSectionData {
}

interface CallbackSectionProps extends BaseHTMLAttributes<HTMLDivElement> {
    data?: CallbackSectionData;
}

export const CallbackSection: FC<CallbackSectionProps> = ({className, ...props}: CallbackSectionProps) => {
    const form = useForm();

    return (
        <section className={`${classes.callbackSection__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.callbackSection__content} cc-main-gutter-content`}>
                <div className={`${classes.callbackSection__headingWrapper}`}>
                    <h1 className={`${classes.callbackSection__heading} cc-heading-1`}>
                        Можем перезвонить
                    </h1>
                    <p className={`${classes.callbackSection__paragraph} cc-pt-9`}>Свяжемся с вами — когда вам будет удобно</p>
                </div>
                <div className={`${classes.callbackSection__formWrapper} cc-width-1of1`}>
                    <CallbackForm data={{
                        fields: [
                            <InputField data={{title: 'Ваше имя *'}} key={0} onInput={form.nameField.onInput} placeholder="Александр"/>,
                            <InputField data={{title: 'Ваш номер *'}} key={1} onInput={form.phoneField.onInput} placeholder="89995543332"/>,
                            <InputField className={`${classes.callbackSection__mailInput}`} data={{title: 'Ваша почта *'}} key={2} onInput={form.mailField.onInput} placeholder="cozycraft@yandex.ru" type="email"/>
                        ],
                        softText: (
                            <div className={`${classes.callbackSection__hint}`}>Нажимая кнопку “Отправить” вы соглашаетесь с&nbsp;
                                <AdaptiveLink className={`${classes.callbackSection__hintAnchor} cc-clr-accent-500`} to="/hello">Политикой конфиденциальности</AdaptiveLink>
                                &nbsp;веб-ресурса
                            </div>
                        ),
                        sendButton: (
                            <Button data={{variant: 'accent'}} onClick={form.requestCall} semantic="button">
                                Отправить
                            </Button>
                    )}} />
                </div>
            </div>
        </section>
    );
};