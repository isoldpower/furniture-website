import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './AboutPage.module.scss';
import {PageTitle} from "@/widgets/navigation";
import {AboutPageImage, AchievementsGrid} from "@/widgets/portfolio";
import {CallbackSection} from "@/widgets/feedback";

const AboutPage: FC = () => {
    return (
        <div className={`${classes.aboutPage__content} cc-main-gutter`}>
            <div className={`${classes.aboutPage__pathWrapper} cc-pt-9`}>
                <PageTitle className={`${classes.aboutPage__path}`} />
            </div>
            <section className={`${classes.aboutPage__overviewWrapper} cc-pt-9 cc-laptop-pt-13`}>
                <div className={`${classes.aboutPage__overview}`}>
                    <AboutPageImage />
                    <AchievementsGrid />
                </div>
            </section>
            <section className={`${classes.aboutPage__callback} cc-py-16 cc-laptop-py-17`}>
                <CallbackSection />
            </section>
        </div>
    );
};

export default AboutPage;