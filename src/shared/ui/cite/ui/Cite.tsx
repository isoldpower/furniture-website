import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Cite.module.scss';
import {QuoteClose, QuoteOpen} from "@/shared/icons";
import {CiteData} from "../model";

interface CiteProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: CiteData;
}

export const Cite: FC<CiteProps> = ({className, data, ...props}: CiteProps) => {
    return (
        <div className={`${classes.cite__wrapper} ${className}`} {...props}>
            <div className={`${classes.cite__content} cc-border-radius-1 cc-p-7 cc-grid cc-gap-10 cc-laptop-gap-1`}>
                <div className={`${classes.cite__quoteWrapper}`}>
                    <QuoteOpen className={`${classes.cite__quote} cc-clr-accent-500`} height={40} width={40}/>
                </div>
                <div className={`${classes.cite__body} cc-grid cc-gap-10`}>
                    <p className={`${classes.cite__paragraph} cc-fs-400`}>{data.paragraph}</p>
                    <div className={`${classes.cite__descriptorWrapper}`}>
                        <div className={`${classes.cite__descriptor}`}>{data.descriptor}</div>
                    </div>
                </div>
                <div className={`${classes.cite__quoteWrapper} ${classes.cite__closeQuote}`}>
                    <QuoteClose className={`${classes.cite__quote} cc-clr-accent-500`} height={40} width={40}/>
                </div>
            </div>
        </div>
    );
};