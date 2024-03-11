import '@/app/scss/main.scss';
import classes from './Home.module.scss';
import {CallbackSection} from "@/widgets/callback-section/ui/CallbackSection";
import {HeroDecorationsProvider} from "@/pages/home/ui/hero-decorations/HeroDecorationsProvider";
import {BaseHTMLAttributes, FC} from "react";
import {HeroSection} from "@/pages/home/ui/hero-section/HeroSection";
import {Cite} from "@/entities/cite/ui/Cite";
import {ProductCard} from "@/entities/product/ui/card/ProductCard";
import {Carousel} from "@/shared/ui";
import {products} from "@/pages/home/api";
import {DetailedProductCard} from "@/widgets/detailed-product-card/ui/DetailedProductCard";

interface HomeProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const Home: FC<HomeProps> = ({className, ...props}: HomeProps) => {
    return (
        <div className={`${classes.homePage__wrapper} ${className}`} {...props}>
            <div className={`${classes.homePage__content} cc-flex cc-flex-col cc-gap-15 cc-laptop-gap-18`}>
                <div className={`${classes.homePage__featuredWrapper}`}>
                    <section className={`${classes.homePage__featuredSection}`}>
                        <Carousel data={{title: 'Кухни'}} id="1">
                            <DetailedProductCard data={products[0]} />
                            <DetailedProductCard data={products[0]} />
                            <DetailedProductCard data={products[0]} />
                            <DetailedProductCard data={products[0]} />
                            <DetailedProductCard data={products[0]} />
                            <DetailedProductCard data={products[0]} />
                            <DetailedProductCard data={products[0]} />
                            <DetailedProductCard data={products[0]} />
                            <DetailedProductCard data={products[0]} />
                        </Carousel>
                    </section>
                </div>
                {/*<div className={`${classes.homePage__heroWrapper}`}>*/}
                {/*    <section className={`${classes.homePage__heroSection} cc-main-gutter`}>*/}
                {/*        <HeroDecorationsProvider className={`${classes.homePage__heroWrapper} cc-width-1of1 cc-main-gutter-content`}>*/}
                {/*            <HeroSection className={`${classes.homePage__heroContent}`}/>*/}
                {/*        </HeroDecorationsProvider>*/}
                {/*    </section>*/}
                {/*</div>*/}
                {/*<div className={`${classes.homePage__citeSection}`}>*/}
                {/*    <section className={`${classes.homePage__citeWrapper} cc-main-gutter`}>*/}
                {/*        <Cite className={`${classes.homePage__cite} cc-main-gutter-content`} data={{*/}
                {/*            paragraph: 'CozyCraft - производство, занимающееся изготовлением мебели для кухонь, гостинных, спален и прихожих.',*/}
                {/*            descriptor: 'CozyCraft – производство, занимающееся изготовлением мебели для кухонь, гостинных, спален и прихожих.'*/}
                {/*        }}/>*/}
                {/*    </section>*/}
                {/*</div>*/}
                {/*<div className={`${classes.homePage__callbackWrapper} cc-pb-15 cc-tablet-pb-17`}>*/}
                {/*    <CallbackSection className={`${classes.homePage__callbackSection}`}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};