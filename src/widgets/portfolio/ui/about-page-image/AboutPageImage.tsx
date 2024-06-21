import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './AboutPageImage.module.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {useSettings} from "@/app/static";
import {useGetImageQuery} from "@/app/redux";
import {AboutImageFx} from "@/features/portfolio/ui/about-image-fx/AboutImageFx";

export const AboutPageImage: FC = () => {
    const settings = useSettings();
    const {...query} = useGetImageQuery(Number(settings.safeData('ABOUT_IMAGE')));

    return (
        <AboutImageFx {...query}>
            <ProgressiveImage className={`${classes.aboutPage__image}`} image={query.currentData}/>
        </AboutImageFx>
    );
};