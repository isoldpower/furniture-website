import '@/app/scss/main.scss';
import classes from './Home.module.scss';
import {BaseHTMLAttributes, FC} from "react";
import {products} from "@/pages/home/api";
import {websiteRoutes} from "@/shared/lib";
import {HeroDecorationsProvider, HeroSection} from "../index";
import {Cite} from "@/entities";
import {AdvantagesGrid, CallbackSection, CatalogDisplay} from "@/widgets";
import {Button} from "@/shared/ui";
import {ProcessGrid} from "@/widgets/process-grid/ui/ProcessGrid";
import {MaterialsDisplay} from "@/widgets/materials-display/ui/MaterialsDisplay";

interface HomeProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const Home: FC<HomeProps> = ({className, ...props}: HomeProps) => {
    return (
        <div className={`${classes.homePage__wrapper} ${className}`} {...props}>
            <div className={`${classes.homePage__content} cc-flex cc-flex-col cc-gap-15 cc-laptop-gap-18`}>
                <section className={`${classes.homePage__heroSection} cc-main-gutter`}>
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
                <section className={`${classes.homePage__featuredSection} cc-grid cc-gap-13 cc-laptop-gap-17`}>
                    <CatalogDisplay data={{title: 'Кухни', href: '/catalog/kitchen', products: products}} id="1"/>
                    <CatalogDisplay data={{title: 'Гостиные', href: '/catalog/livingroom', products: products}}
                                    id="2"/>
                    <CatalogDisplay data={{title: 'Спальни', href: '/catalog/bathroom', products: products}}
                                    id="3"/>
                    <div className="cc-main-gutter">
                        <div className={`${classes.featuredSection__buttonWrapper} cc-main-gutter-content`}>
                            <Button className="cc-main-gutter-content" data={{variant: 'accent'}} semantic="link"
                                    to={websiteRoutes.catalog}>Перейти в каталог</Button>
                        </div>
                    </div>
                </section>
                <section className={`${classes.homePage__advantagesSection} cc-main-gutter`}>
                    <div className={`${classes.advantagesSection__wrapper} cc-main-gutter-content`}>
                        <AdvantagesGrid />
                    </div>
                </section>
                <section className={`${classes.homePage__processSection} cc-main-gutter`}>
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
                <CallbackSection className={`${classes.homePage__callbackSection} cc-pb-15 cc-tablet-pb-17`}/>
            </div>
        </div>
    );
};