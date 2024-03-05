import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CallbackSection.module.scss';
import {CallbackForm} from "@/entities/callback-form/ui/CallbackForm";
import {Button} from "@/shared/ui/button/ui/Button";
import {InputField} from "@/shared/ui/input-field/ui/InputField";
import {AdaptiveLink} from "@/shared/ui/link/ui/AdaptiveLink";
import {useForm} from "@/features/use-form/lib";

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
                            <InputField data={{title: 'Ваше имя *'}} placeholder={'Александр'} onInput={form.nameField.onInput} key={0}/>,
                            <InputField data={{title: 'Ваш номер *'}} placeholder={'89995543332'} onInput={form.phoneField.onInput} key={1}/>,
                            <InputField data={{title: 'Ваша почта *'}} placeholder={'cozycraft@yandex.ru'} onInput={form.mailField.onInput} key={2} type={"email"} className={`${classes.callbackSection__mailInput}`}/>
                        ],
                        softText: (
                            <div className={`${classes.callbackSection__hint}`}>Нажимая кнопку “Отправить” вы соглашаетесь с&nbsp;
                                <AdaptiveLink className={`${classes.callbackSection__hintAnchor} cc-clr-accent-500`} to={'/hello'}>Политикой конфиденциальности</AdaptiveLink>
                                &nbsp;веб-ресурса
                            </div>
                        ),
                        sendButton: (
                            <Button type={'button'} data={{variant: 'accent'}} onClick={form.requestCall}>
                                Отправить
                            </Button>
                    )}} />
                </div>
            </div>
        </section>
    );
};