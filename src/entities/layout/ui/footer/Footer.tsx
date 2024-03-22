import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Footer.module.scss';
import {FooterContacts} from "./mixins/contacts/FooterContacts";
import {FooterBasement} from "./mixins/basement/FooterBasement";
import {FooterData} from "@/entities/layout/model";

interface FooterProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: FooterData;
}

export const Footer: FC<FooterProps> = ({className, data, ...props}: FooterProps) => {
    return (
        <footer className={`${classes.footer__wrapper} ${className} cc-px-4 cc-pb-3`} {...props}>
            <div className={`${classes.footer__content} cc-p-7`}>
                <div className={`${classes.footer__gutter} cc-grid cc-gap-9`}>
                    <div className={`${classes.footer__upper} cc-grid cc-gap-9`}>
                        <FooterContacts data={data} />
                        <nav className={`${classes.footer__navigationWrapper} cc-flex cc-rgap-9 cc-tablet-flex`}>
                            {data.sections}
                        </nav>
                    </div>
                    <div className={`${classes.footer__bottom} cc-grid`}>
                        <FooterBasement data={data} />
                    </div>
                </div>
            </div>
        </footer>
    );
};