import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './CustomProject.module.scss';
import {useSettings} from "@/app/static";

interface CustomProjectProps {
    title: string;
    paragraph: string;
}

export const CustomProject: FC<CustomProjectProps> = ({title, paragraph}: CustomProjectProps) => {
    const settings = useSettings();
    const address = settings.safeData('FIRM_NUMBER');

    return (
        <div className={`${classes.customProjects__cta} cc-flex cc-flex-col cc-gap-9 cc-p-9`}>
            <h4 className={`${classes.customProjects__ctaHeading} cc-clr-accent-500`}>{title}</h4>
            <div className={`${classes.customProjects__ctaDescriptor} cc-grid cc-gap-6`}>
                <p className={`${classes.customProjects__ctaParagraph}`}>{paragraph}</p>
                <address className={`${classes.customProjects__ctaAdress} cc-clr-accent-500`}>{address}</address>
            </div>
        </div>
    );
};