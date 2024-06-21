import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Footer.module.scss';

type FooterProps = {
    sections?: ReactNode[];
    basement?: ReactNode;
    header?: ReactNode;
}

export const Footer: FC<FooterProps> = ({sections, basement, header}: FooterProps) => {
    return (
        <footer className={`${classes.footer__wrapper} cc-px-4 cc-pb-3`}>
            <div className={`${classes.footer__content} cc-p-7`}>
                <div className={`${classes.footer__gutter} cc-grid cc-gap-9`}>
                    <div className={`${classes.footer__upper} cc-grid cc-gap-9`}>
                        {header}
                        <nav className={`${classes.footer__navigationWrapper} cc-flex cc-rgap-9 cc-tablet-flex`}>
                            {sections}
                        </nav>
                    </div>
                    <div className={`${classes.footer__bottom} cc-grid`}>
                        {basement}
                    </div>
                </div>
            </div>
        </footer>
    );
};