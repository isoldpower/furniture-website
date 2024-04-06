import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CallbackSection.module.scss';
import {useForm} from "@/features";
import {AdaptiveLink, Button, InputField} from "@/shared/ui";
import {CallbackForm} from "@/entities/layout";
import {websiteRoutes} from "@/shared/lib";

interface CallbackSectionProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CallbackSection: FC<CallbackSectionProps> = ({className, ...props}: CallbackSectionProps) => {
    const form = useForm();

    return (
        <div className={`${classes.callbackSection__wrapper} ${className} `} {...props}>
            <div className={`${classes.callbackSection__content}`}>
                <div className={`${classes.callbackSection__headingWrapper}`}>
                    <h1 className={`${classes.callbackSection__heading} cc-heading-1`}>
                        Можем перезвонить
                    </h1>
                    <p className={`${classes.callbackSection__paragraph} cc-pt-9`}>Свяжемся с вами — когда вам будет
                        удобно</p>
                </div>
                <div className={`${classes.callbackSection__formWrapper} cc-width-1of1`}>
                    <CallbackForm data={{
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
                            <Button data={{variant: 'accent'}} onClick={form.requestCall} semantic="button">
                                Отправить
                            </Button>
                        )
                    }}/>
                </div>
            </div>
        </div>
    );
};