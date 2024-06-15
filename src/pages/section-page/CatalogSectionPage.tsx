import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSection.module.scss';
import {PageTitle} from "@/widgets/navigation";
import {CallbackSection} from "@/widgets/feedback";
import {HintedProductsList} from "@/widgets/catalog-section";

interface CatalogSectionPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const CatalogSectionPage: FC<CatalogSectionPageProps> = ({className, ...props}: CatalogSectionPageProps) => {
    return (
        <div className={`${classes.catalogSection__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalogSection__content} cc-main-gutter-content`}>
                <div className={`${classes.catalogSection__titleWrapper}`}>
                    <div className={`${classes.catalogSection__title} cc-pt-9`}>
                        <PageTitle />
                    </div>
                </div>
                <div className={`${classes.catalogSection__catalogWrapper} cc-pt-9 cc-laptop-pt-13`}>
                    <HintedProductsList />
                </div>
                <section className={`${classes.catalogSection__callback} cc-py-15 cc-laptop-py-17`}>
                    <CallbackSection />
                </section>
            </div>
        </div>
    );
}

export default CatalogSectionPage;