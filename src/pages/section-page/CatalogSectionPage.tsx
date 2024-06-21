import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSection.module.scss';
import {PageTitle} from "@/widgets/navigation";
import {CallbackSection} from "@/widgets/feedback";
import {HintedProductsList} from "@/widgets/catalog-section";

const CatalogSectionPage: FC = () => {
    return (
        <div className={`${classes.catalogSection__wrapper} cc-main-gutter`}>
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
    );
}

export default CatalogSectionPage;