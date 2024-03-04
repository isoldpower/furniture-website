import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './WebsiteFooter.module.scss';
import {Footer} from "@/entities/footer/ui/Footer";
import {placeSections} from "@/features/place-sections/lib/placeLinkSections";
import {sections} from "@/widgets/website-footer/api";

interface WebsiteFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteFooter: FC<WebsiteFooterProps> = ({className, ...props}: WebsiteFooterProps) => {
    return (
        <Footer data={{sections: placeSections(sections)}} {...props} />
    );
};