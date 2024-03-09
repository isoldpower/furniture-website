import '@/app/scss/main.scss';
import classes from './Home.module.scss';
import {CallbackSection} from "@/widgets/callback-section/ui/CallbackSection";
import {Button} from "@/shared/ui";
import {HeroDecorationsProvider} from "@/pages/home/ui/hero-decorations/HeroDecorationsProvider";
import {BaseHTMLAttributes, FC} from "react";

interface HomeProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const Home: FC<HomeProps> = ({className, ...props}: HomeProps) => {
    return (
        <div className={`${classes.homePage__wrapper} ${className}`} {...props}>
            <div className={`${classes.homePage__content} cc-grid cc-gap-15 cc-laptop-gap-18`}>
                <div className={`${classes.homePage__heroWrapper}`}>
                    <section className={`${classes.homePage__heroSection} cc-main-gutter`}>
                        <HeroDecorationsProvider>
                            <div className={`${classes.heroSection__content} cc-gap-13 cc-main-gutter-content`}>
                                <div className={`${classes.heroSection__body} cc-gap-10`}>
                                    <h1 className={`${classes.heroSection__heading} cc-heading-1`}>Корпусная
                                        мебель <br/> под заказ</h1>
                                    <p className={`${classes.heroSection__paragraph}`}>Спроектируем и сделать мебель с
                                        точностью как вы хотите, учитывая все ваши пожелания с использованием качественных
                                        отделочных материалов</p>
                                </div>
                                <div className={`${classes.heroSection__buttons}`}>
                                    <Button semantic={'link'} to={'/catalog'} data={{variant: 'accent'}}
                                            className={`${classes.heroSection__accentButton}`}>Перейти в каталог</Button>
                                    <Button semantic={'link'} to={'/about'} className={`${classes.heroSection__aboutButton}`}>Подробнее
                                        о компании</Button>
                                </div>
                            </div>
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