import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CustomProject.module.scss';

interface CustomProjectData {
    title: string;
    paragraph: string;
    address: string;
}

interface CustomProjectProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: CustomProjectData;
}

export const CustomProject: FC<CustomProjectProps> = ({className, data, ...props}: CustomProjectProps) => {
    return (
        <div className={`${classes.customProjects__cta} ${className} cc-flex cc-flex-col cc-gap-9 cc-p-9`} {...props}>
            <h4 className={`${classes.customProjects__ctaHeading} cc-clr-accent-500`}>{data.title}</h4>
            <div className={`${classes.customProjects__ctaDescriptor} cc-grid cc-gap-6`}>
                <p className={`${classes.customProjects__ctaParagraph}`}>{data.paragraph}</p>
                <address className={`${classes.customProjects__ctaAdress} cc-clr-accent-500`}>{data.address}</address>
            </div>
        </div>
    );
};