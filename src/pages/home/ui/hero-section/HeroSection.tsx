import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './HeroSection.module.scss';
import {Button} from "@/shared/ui";

interface HeroSectionProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const HeroSection: FC<HeroSectionProps> = ({className, ...props}: HeroSectionProps) => {
    return (
        <div className={`${classes.heroSection__wrapper} ${className}`} {...props}>
            <div className={`${classes.heroSection__content} cc-gap-13 cc-main-gutter-content`}>
                <div className={`${classes.heroSection__body} cc-gap-10`}>
                    <h1 className={`${classes.heroSection__heading} cc-heading-1`}>Корпусная
                        мебель <br/> под заказ</h1>
                    <p className={`${classes.heroSection__paragraph}`}>Спроектируем и сделать мебель с
                        точностью как вы хотите, учитывая все ваши пожелания с использованием качественных
                        отделочных материалов</p>
                </div>
                <div className={`${classes.heroSection__buttons}`}>
                    <Button className={`${classes.heroSection__accentButton}`} data={{variant: 'accent'}}
                            semantic="link"
                            to="/catalog">Перейти в каталог</Button>
                    <Button className={`${classes.heroSection__aboutButton}`} semantic="link" to="/about">Подробнее
                        о компании</Button>
                </div>
            </div>
        </div>
    );
};