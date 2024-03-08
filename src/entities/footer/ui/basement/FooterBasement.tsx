import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './FooterBasement.module.scss';
import {FooterData} from "@/entities/footer/model";
import {AdaptiveLink} from "@/shared/ui";

interface FooterBasementProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: FooterData;
}

export const FooterBasement: FC<FooterBasementProps> = ({className, ...props}: FooterBasementProps) => {
    return (
        <div className={`${classes.footer__bottom} ${className} cc-grid`} {...props}>
            <address className={`${classes.footer__legalInfo} cc-grid cc-gap-3 cc-desktop-gap-0 cc-fs-100`}>
                <span>Бирюков Георгий Игоревич</span>
                <span>+7 (927) 388-82-18</span>
                <span>georgiibiryukov@gmail.com</span>
                <span>ИНН: 580311228877</span>
                <span>г. Санкт Петербург, Светлановский пр-кт, д.35, кв. 83</span>
            </address>
            <ul className={`${classes.footer__agreements} cc-fs-100 cc-gap-4 cc-desktop-gap-0 cc-pt-9 cc-tablet-pt-0 cc-desktop-pb-6`}>
                <li className={`${classes.footer__agreementItem}`}>
                    <AdaptiveLink className={`${classes.footer__contract}`} to='/agreement'>
                        Договор оферты
                    </AdaptiveLink>
                </li>
                <li className={`${classes.footer__agreementItem}`}>
                    <AdaptiveLink className={`${classes.footer__policy}`} to='/policy'>
                        Политика конфиденциальности
                    </AdaptiveLink>
                </li>
            </ul>
        </div>
    );
};