import {BaseHTMLAttributes, FC, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './AboutPage.module.scss';
import {PageTitle} from "@/widgets/navigation";
import {ProgressiveImage, ProgressiveImageType} from "@/shared/ui-toolkit";
import {useGetImageQuery} from "@/app/redux";
import {imageDefault, imageFailed} from "@/shared/lib";
import {useSettings} from "@/app/static";
import {AchievementsGrid} from "@/widgets/portfolio";
import {CallbackSection} from "@/widgets/feedback";

interface AboutPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const AboutPage: FC<AboutPageProps> = ({className, ...props}: AboutPageProps) => {
    const settings = useSettings();
    const {currentData: queryImage, isSuccess, isError} = useGetImageQuery(Number(settings.safeData('ABOUT_IMAGE')));
    const image = useRef<ProgressiveImageType>(imageDefault);

    if (isError) image.current = imageFailed;
    else if (isSuccess) image.current = queryImage;

    return (
        <div className={`${classes.aboutPage__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.aboutPage__content} cc-main-gutter-content`}>
                <div className={`${classes.aboutPage__pathWrapper} cc-pt-9`}>
                    <PageTitle className={`${classes.aboutPage__path}`} />
                </div>
                <section className={`${classes.aboutPage__overviewWrapper} cc-pt-9 cc-laptop-pt-13`}>
                    <div className={`${classes.aboutPage__overview}`}>
                        <ProgressiveImage className={`${classes.aboutPage__image}`} image={image.current}/>
                        <AchievementsGrid />
                    </div>
                </section>
                <section className={`${classes.aboutPage__callback} cc-py-16 cc-laptop-py-17`}>
                    <CallbackSection />
                </section>
            </div>
        </div>
    );
};

export default AboutPage;