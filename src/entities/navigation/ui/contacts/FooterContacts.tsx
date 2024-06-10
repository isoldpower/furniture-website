import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './FooterContacts.module.scss';
import {Icon, Logo} from "@/shared/icons";
import {AdaptiveLink} from "@/shared/ui-toolkit";
import {ContactsData} from "@/entities/navigation";
import {useSettings} from "@/app/static";

interface FooterContactsProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ContactsData;
}

export const FooterContacts: FC<FooterContactsProps> = ({className, data, ...props}: FooterContactsProps) => {
    const settings = useSettings();

    return (
        <div className={`${classes.footer__contactsWrapper} ${className}`} {...props}>
            <div className={`${classes.footer__logoWrapper} cc-flex cc-align-items-center cc-gap-2`}>
                <Icon className={`${classes.footer__logoIcon}`} height={28} width={28}/>
                <Logo className={`${classes.footer__logoText}`} height={18} width={148}/>
            </div>
            <p className={`${classes.footer__paragraph} cc-pt-7`}>Менеджер в индивидуальном порядке отвечает на все
                интересующие вопросы, подбирает дизайн-проект</p>
            <address className={`${classes.footer__phoneNumber} cc-heading-3 cc-pt-9`}>{settings.safeData('FIRM_NUMBER')}</address>
            <ul className={`${classes.footer__socialNetworks} cc-flex cc-gap-3 cc-pt-4`}>
                {data.socials.map((link, key) => (
                    <li className={`${classes.footer__social}`} key={key}>
                        <AdaptiveLink className={`${classes.footer__socialLink}`} target="_blank" to={link.href}>
                            {link.icon}
                        </AdaptiveLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};