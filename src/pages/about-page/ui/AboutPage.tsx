import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './AboutPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {achievements} from "@/pages/about-page/config/achievements";
import {ProgressiveImage} from "@/shared/ui";
import {imageApiHandler} from "@/shared/api";

interface AboutPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const AboutPage: FC<AboutPageProps> = ({className, ...props}: AboutPageProps) => {
    return (
        <div className={`${classes.aboutPage__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.aboutPage__content} cc-main-gutter-content`}>
                <div className={`${classes.aboutPage__pathWrapper} cc-pt-9`}>
                    <PageTitle className={`${classes.aboutPage__path}`} />
                </div>
                <section className={`${classes.aboutPage__overviewWrapper} cc-pt-9 cc-laptop-pt-13`}>
                    <div className={`${classes.aboutPage__overview}`}>
                        <ProgressiveImage className={`${classes.aboutPage__image}`} image={imageApiHandler.getImage(7)}/>
                        <div className={`${classes.aboutPage__body} cc-flex cc-flex-col cc-gap-9 cc-laptop-gap-13`}>
                            <h1 className={`${classes.aboutPage__overviewHeading}`}>CozyCraft – производство, занимающееся изготовлением мебели для кухонь, гостинных, спален и прихожих.</h1>
                            <p className={`${classes.aboutPage__overviewParagraph}`}>Ламинированная древесно-стружечная плита, сокращенно ЛДСП – это плитный материал, который получают путем прессования ковра из смеси древесной стружки со смолами с последующим нанесением ламинирующего защитно-декоративного покрытия.</p>
                            <div className={`${classes.aboutPage__achievements} cc-flex cc-gap-5`}>
                                {achievements.map((achievement, key) => (
                                    <div className={`${classes.aboutPage__achievement} cc-grid cc-gap-7`} key={key}>
                                        <h4 className={`${classes.aboutPage__achievementDescriptor}`}>{achievement.title}</h4>
                                        <div className={`${classes.aboutPage__achievementNumber} cc-clr-accent-500`}>{achievement.data}</div>
                                    </div>
                                ))}
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