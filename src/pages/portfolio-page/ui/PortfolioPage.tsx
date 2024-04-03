import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {PortfolioLoader} from "@/pages/portfolio-page/ui/mixins/portfolio-loader/PortfolioLoader";

interface PortfolioPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const PortfolioPage: FC<PortfolioPageProps> = ({className, ...props}: PortfolioPageProps) => {
    return (
        <div className={`${classes.portfolioPage__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.portfolioPage__content} cc-main-gutter-content`}>
                <div className={`${classes.portfolioPage__pathWrapper} cc-pt-9`}>
                    <PageTitle className={`${classes.portfolioPage__path}`} />
                </div>
                <section className={`${classes.portfolioPage__gridWrapper} cc-pt-9 cc-laptop-pt-13`}>
                    <PortfolioLoader />
                </section>
                <section className={`${classes.portfolioPage__callback} cc-py-15 cc-laptop-py-17`}>
                    <CallbackSection />
                </section>
            </div>
        </div>
    );
};

export default PortfolioPage;