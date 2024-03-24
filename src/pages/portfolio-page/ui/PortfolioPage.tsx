import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {getImage} from "@/shared/api";
import {PortfolioGrid, portfolioItems} from "@/widgets/portfolio";
import {PortfolioItem} from "@/entities/portfolio";
import {InspectImage} from "@/features/inspect-image/InspectImage/InspectImage";

interface PortfolioPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const PortfolioPage: FC<PortfolioPageProps> = ({className, ...props}: PortfolioPageProps) => {
    return (
        <div className={`${classes.portfolioPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.portfolioPage__content}`}>
                <div className={`${classes.portfolioPage__pathWrapper} cc-main-gutter cc-pt-9`}>
                    <PageTitle className={`${classes.portfolioPage__path} cc-main-gutter-content`} />
                </div>
            </div>
            <div className={`${classes.portfolioPage__gridWrapper} cc-main-gutter cc-pt-9 cc-laptop-pt-13`}>
                <PortfolioGrid className={`${classes.portfolioPage__grid} cc-main-gutter-content`}>
                    {portfolioItems.map((item, key) => (
                        <InspectImage className="cc-flex cc-width-1of1" data={getImage(item.imageId)} key={key}>
                            <PortfolioItem className="cc-flex cc-width-1of1" data={getImage(item.imageId)} />
                        </InspectImage>
                    ))}
                </PortfolioGrid>
            </div>
            <section className={`${classes.portfolioPage__callback} cc-py-15 cc-laptop-py-17`}>
                <CallbackSection />
            </section>
        </div>
    );
};

export default PortfolioPage;