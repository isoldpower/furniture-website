import {BaseHTMLAttributes, FC, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './AboutPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {ProgressiveImage, ProgressiveImageType} from "@/shared/ui";
import {useGetImageQuery} from "@/app/redux";
import {imageDefault, imageFailed} from "@/shared/lib/api/loadingDefaults";
import {AboutAdvantage} from "@/entities/advantage";
import {
    ABOUT_IMAGE, ABOUT_PARAGRAPH,
    ABOUT_STATISTIC1_NUMBER, ABOUT_STATISTIC1_TITLE,
    ABOUT_STATISTIC2_NUMBER, ABOUT_STATISTIC2_TITLE,
    ABOUT_STATISTIC3_NUMBER, ABOUT_STATISTIC3_TITLE, ABOUT_TITLE
} from "@/app/static";

interface AboutPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const AboutPage: FC<AboutPageProps> = ({className, ...props}: AboutPageProps) => {
    const {currentData: queryImage, isSuccess, isError} = useGetImageQuery(ABOUT_IMAGE);
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
                        <div className={`${classes.aboutPage__body} cc-flex cc-flex-col cc-gap-9 cc-laptop-gap-13`}>
                            <h1 className={`${classes.aboutPage__overviewHeading}`}>{ABOUT_TITLE}</h1>
                            <p className={`${classes.aboutPage__overviewParagraph}`}>{ABOUT_PARAGRAPH}</p>
                            <div className={`${classes.aboutPage__achievements} cc-flex cc-gap-5`}>
                                <AboutAdvantage data={{title: ABOUT_STATISTIC1_TITLE, number: ABOUT_STATISTIC1_NUMBER}} />
                                <AboutAdvantage data={{title: ABOUT_STATISTIC2_TITLE, number: ABOUT_STATISTIC2_NUMBER}} />
                                <AboutAdvantage data={{title: ABOUT_STATISTIC3_TITLE, number: ABOUT_STATISTIC3_NUMBER}} />
                            </div>
                        </div>
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