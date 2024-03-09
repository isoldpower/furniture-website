import '@/app/scss/main.scss';
import classes from './Home.module.scss';
import {CallbackSection} from "@/widgets/callback-section/ui/CallbackSection";
import {HeroDecorationsProvider} from "@/pages/home/ui/hero-decorations/HeroDecorationsProvider";
import {BaseHTMLAttributes, FC} from "react";
import {HeroSection} from "@/pages/home/ui/hero-section/HeroSection";

interface HomeProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const Home: FC<HomeProps> = ({className, ...props}: HomeProps) => {
    return (
        <div className={`${classes.homePage__wrapper} ${className}`} {...props}>
            <div className={`${classes.homePage__content} cc-grid cc-gap-15 cc-laptop-gap-18`}>
                <div className={`${classes.homePage__heroWrapper}`}>
                    <section className={`${classes.homePage__heroSection} cc-main-gutter`}>
                        <HeroDecorationsProvider className={`${classes.homePage__heroWrapper} cc-width-1of1 cc-main-gutter-content`}>
                            <HeroSection className={`${classes.homePage__heroContent}`}/>
                        </HeroDecorationsProvider>
                    </section>
                </div>
                <div className={`${classes.homePage__callbackWrapper} cc-pb-15 cc-tablet-pb-17`}>
                    <CallbackSection className={`${classes.homePage__callbackSection}`}/>
                </div>
            </div>
        </div>
    );
};