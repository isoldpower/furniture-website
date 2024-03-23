import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioPage.module.scss';

interface PortfolioPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const PortfolioPage: FC<PortfolioPageProps> = ({className, ...props}: PortfolioPageProps) => {
    return (
        <div className={`${classes.portfolioPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.portfolioPage__content}`}>
                <h1 className="cc-heading-1">PORTFOLIO</h1>
            </div>
        </div>
    );
};

export default PortfolioPage;