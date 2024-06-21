import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioPage.module.scss';
import {PageTitle} from "@/widgets/navigation";
import {CallbackSection} from "@/widgets/feedback";
import {PortfolioImagesFlow} from "@/widgets/portfolio";


const PortfolioPage: FC = () => {
    return (
        <div className={`${classes.portfolioPage__content} cc-main-gutter`}>
            <div className={`${classes.portfolioPage__pathWrapper} cc-pt-9`}>
                <PageTitle className={`${classes.portfolioPage__path}`} />
            </div>
            <section className={`${classes.portfolioPage__gridWrapper} cc-pt-9 cc-laptop-pt-13`}>
                <PortfolioImagesFlow />
            </section>
            <section className={`${classes.portfolioPage__callback} cc-py-15 cc-laptop-py-17`}>
                <CallbackSection />
            </section>
        </div>
    );
};

export default PortfolioPage;