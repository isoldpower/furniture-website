import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Footer.module.scss';
import {Icon, Logo, Telegram, Vk, Whatsapp} from "@/shared/icons";

interface FooterData {
    sections: ReactNode[]
}

interface FooterProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: FooterData;
}

export const Footer: FC<FooterProps> = ({className, data, ...props}: FooterProps) => {
    return (
        <footer className={`${classes.footer__wrapper} ${className} cc-px-4 cc-pb-3`} {...props}>
            <div className={`${classes.footer__content} cc-p-7`}>
                <div className={`${classes.footer__gutter} cc-grid cc-gap-9`}>
                    <div className={`${classes.footer__upper} cc-grid cc-gap-9`}>
                        <div className={`${classes.footer__contactsWrapper}`}>
                            <div className={`${classes.footer__logoWrapper} cc-flex cc-align-items-center cc-gap-2`}>
                                <Icon width={28} height={28} className={`${classes.footer__logoIcon}`} />
                                <Logo width={148} height={18} className={`${classes.footer__logoText}`} />
                            </div>
                            <p className={`${classes.footer__paragraph} cc-pt-7`}>Менеджер в индивидуальном порядке отвечает на все интересующие вопросы, подбирает дизайн-проект</p>
                            <address className={`${classes.footer__phoneNumber} cc-heading-3 cc-pt-9`}>+7 999 123-34-54</address>
                            <ul className={`${classes.footer__socialNetworks} cc-flex cc-gap-3 cc-pt-4`}>
                                <li className={`${classes.footer__social}`}>
                                    <a className={`${classes.footer__socialLink}`}>
                                        <Vk className={`${classes.footer__socialIcon}`} color={'#0077FF'}/>
                                    </a>
                                </li>
                                <li className={`${classes.footer__social}`}>
                                    <a className={`${classes.footer__socialLink}`}>
                                        <Telegram className={`${classes.footer__socialIcon}`} color={'#229ED9'}/>
                                    </a>
                                </li>
                                <li className={`${classes.footer__social}`}>
                                    <a className={`${classes.footer__socialLink}`}>
                                        <Whatsapp className={`${classes.footer__socialIcon}`} color={'#25D366'}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <nav className={`${classes.footer__navigationWrapper} cc-flex cc-rgap-9 cc-tablet-flex`}>
                            {data.sections}
                        </nav>
                    </div>
                    <div className={`${classes.footer__bottom} cc-grid`}>
                        <div className={`${classes.footer__legalInfo} cc-grid cc-gap-3 cc-fs-100`}>
                            <div>Бирюков Георгий Игоревич</div>
                            <address>+7 (927) 388-82-18</address>
                            <address>georgiibiryukov@gmail.com</address>
                            <div>ИНН: 580311228877</div>
                            <address>г. Санкт Петербург, Светлановский пр-кт, д.35, кв. 83</address>
                        </div>
                        <ul className={`${classes.footer__agreements} cc-fs-100 cc-grid cc-gap-4 cc-pt-9`}>
                            <li className={`${classes.footer__agreementItem}`}>
                                <a className={`${classes.footer__contract}`}>Договор оферты</a>
                            </li>
                            <li className={`${classes.footer__agreementItem}`}>
                                <a className={`${classes.footer__policy}`}>Политика конфиденциальности</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};