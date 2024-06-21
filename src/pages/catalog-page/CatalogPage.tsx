import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogPage.module.scss';
import {PageTitle} from "@/widgets/navigation";
import {CatalogSectionPreviewList} from "@/widgets/catalog-section";
import {CallbackSection} from "@/widgets/feedback";

const CatalogPage: FC = () => {
    return (
        <div className={`${classes.catalog__content} cc-main-gutter`}>
            <div className={`${classes.catalog__titleWrapper}`}>
                <PageTitle className={`${classes.catalog__pageTitle} cc-pt-9`} />
            </div>
            <section className={`${classes.catalog__sections} cc-pt-9 cc-laptop-pt-11r`}>
                <CatalogSectionPreviewList />
            </section>
            <section className={`${classes.catalog__callbackSection} cc-py-16 cc-laptop-py-18`}>
                <CallbackSection />
            </section>
        </div>
    );
};

export default CatalogPage;