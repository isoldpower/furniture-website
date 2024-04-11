import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './FooterBasement.module.scss';
import {AdaptiveLink} from "@/shared/ui";
import {FooterData} from "@/entities/layout/model";
import {websiteRoutes} from "@/shared/lib";
import {useSettings} from "@/app/static/useSettings";

interface FooterBasementProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: FooterData;
}

export const FooterBasement: FC<FooterBasementProps> = ({className, ...props}: FooterBasementProps) => {
    const settings = useSettings();

    return (
        <div className={`${classes.footer__bottom} ${className} cc-grid`} {...props}>
            <address className={`${classes.footer__legalInfo} cc-grid cc-gap-3 cc-desktop-gap-0 cc-fs-100`}>
                <span>{settings.safeData('COMMERCIAL_NAME')}</span>
                <span>{settings.safeData('COMMERCIAL_NUMBER')}</span>
                <span>{settings.safeData('COMMERCIAL_MAIL')}</span>
                <span>{settings.safeData('COMMERCIAL_INN')}</span>
                <span>{settings.safeData('COMMERCIAL_ADDRESS')}</span>
            </address>
            <ul className={`${classes.footer__agreements} cc-fs-100 cc-gap-4 cc-desktop-gap-0 cc-pt-9 cc-tablet-pt-0 cc-desktop-pb-6`}>
                <li className={`${classes.footer__agreementItem}`}>
                    <AdaptiveLink className={`${classes.footer__contract}`} to={websiteRoutes.agreement}>
                        Договор оферты
                    </AdaptiveLink>
                </li>
                <li className={`${classes.footer__agreementItem}`}>
                    <AdaptiveLink className={`${classes.footer__policy}`} to={websiteRoutes.policy}>
                        Политика конфиденциальности
                    </AdaptiveLink>
                </li>
            </ul>
        </div>
    );
};