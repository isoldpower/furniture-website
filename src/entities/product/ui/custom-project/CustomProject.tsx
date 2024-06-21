import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './CustomProject.module.scss';
import {useSettings} from "@/app/static";

type CustomProjectData = {
    title: string;
    paragraph: string;
}

type CustomProjectProps = {
    data?: CustomProjectData;
}

export const CustomProject: FC<CustomProjectProps> = ({data}: CustomProjectProps) => {
    const settings = useSettings();
    const address = settings.safeData('FIRM_NUMBER');

    return data ? (
        <div className={`${classes.customProjects__cta} cc-flex cc-flex-col cc-gap-9 cc-p-9`}>
            <h4 className={`${classes.customProjects__ctaHeading} cc-clr-accent-500`}>{data.title}</h4>
            <div className={`${classes.customProjects__ctaDescriptor} cc-grid cc-gap-6`}>
                <p className={`${classes.customProjects__ctaParagraph}`}>{data.paragraph}</p>
                <address className={`${classes.customProjects__ctaAdress} cc-clr-accent-500`}>{address}</address>
            </div>
        </div>
    ) : undefined;
};