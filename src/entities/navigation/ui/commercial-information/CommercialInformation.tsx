import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './CommercialInformation.module.scss';
import {AdaptiveLink} from "@/shared/ui-toolkit";
import {websiteRoutes} from "@/shared/lib";
import {useSettings} from "@/app/static";

type FooterBasementProps = object;

export const CommercialInformation: FC<FooterBasementProps> = () => {
    const settings = useSettings();

    return (
        <div className={`${classes.footer__bottom} cc-grid`}>
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