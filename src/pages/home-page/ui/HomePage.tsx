import '@/app/scss/main.scss';
import classes from './HomePage.module.scss';
import {BaseHTMLAttributes, FC} from "react";
import {websiteRoutes} from "@/shared/lib";
import {Button, Cite} from "@/shared/ui";
import {HeroDecorationsProvider, HeroSection} from "./mixins";
import {AdvantagesGrid} from "@/widgets/advantage";
import {ProcessGrid} from "@/widgets/process";
import {MaterialsDisplay} from "@/widgets/material";
import {CallbackSection} from "@/widgets/layout";
import {CatalogLoader} from "@/pages/home-page/ui/mixins/catalog-loader/CatalogLoader";

interface HomeProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const HomePage: FC<HomeProps> = ({className, ...props}: HomeProps) => {
    return (
        <div className={`${classes.homePage__wrapper} ${className}`} {...props}>
            <div className={`${classes.homePage__content} cc-flex cc-flex-col cc-gap-15 cc-laptop-gap-18`}>
                <section className={`${classes.homePage__heroSection} cc-main-gutter cc-pt-9`}>
                    <HeroDecorationsProvider
                        className={`${classes.homePage__heroWrapper} cc-width-1of1 cc-main-gutter-content`}>
                        <HeroSection className={`${classes.homePage__heroContent}`}/>
                    </HeroDecorationsProvider>
                </section>
                <section className={`${classes.homePage__citeWrapper} cc-main-gutter`}>
                    <Cite className={`${classes.homePage__cite} cc-main-gutter-content`} data={{
                        paragraph: 'CozyCraft - производство, занимающееся изготовлением мебели для кухонь, гостинных, спален и прихожих.',
                        descriptor: 'CozyCraft – производство, занимающееся изготовлением мебели для кухонь, гостинных, спален и прихожих.'
                    }}/>
                </section>
                <section className={`${classes.homePage__featuredSection} cc-flex cc-flex-col cc-gap-13 cc-laptop-gap-17`}>
                    <CatalogLoader />
                    <div className="cc-main-gutter">
                        <div className={`${classes.featuredSection__buttonWrapper} cc-main-gutter-content`}>
                            <Button className="cc-main-gutter-content" data={{variant: 'accent'}} semantic="link"
                                    to={websiteRoutes.catalog}>Перейти в каталог</Button>
                        </div>
                    </div>
                </section>
                <section className={`${classes.homePage__advantagesSection} cc-main-gutter`} id='advantages'>
                    <div className={`${classes.advantagesSection__wrapper} cc-main-gutter-content`}>
                        <AdvantagesGrid />
                    </div>
                </section>
                <section className={`${classes.homePage__processSection} cc-main-gutter`} id='process'>
                    <div className={`${classes.processSection__wrapper} cc-main-gutter-content`}>
                        <h2 className={`${classes.processSection__heading} cc-pb-7 cc-laptop-pb-11`}>Этапы работы</h2>
                        <ProcessGrid />
                    </div>
                </section>
                <section className={`${classes.homePage__materialsSection}`}>
                    <div className={`${classes.materialsSection__wrapper}`}>
                        <MaterialsDisplay />
                    </div>
                </section>
                <section className={`${classes.homePage__callbackSection} cc-main-gutter cc-pb-15 cc-tablet-pb-17`}>
                    <CallbackSection className={`${classes.homePage__callback} cc-main-gutter-content`} />
                </section>
            </div>
        </div>
    );
};

export default HomePage;