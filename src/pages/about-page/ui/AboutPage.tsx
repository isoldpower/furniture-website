import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './AboutPage.module.scss';

interface AboutPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const AboutPage: FC<AboutPageProps> = ({className, ...props}: AboutPageProps) => {
    return (
        <div className={`${classes.aboutPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.aboutPage__content}`}>
                <h1 className="cc-heading-1">ABOUT</h1>
            </div>
        </div>
    );
};

export default AboutPage;