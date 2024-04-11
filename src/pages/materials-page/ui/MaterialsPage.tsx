import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {MaterialsLoader} from "@/pages/materials-page/ui/mixins/materials-loader/MaterialsLoader";

interface MaterialsPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const MaterialsPage: FC<MaterialsPageProps> = ({className, ...props}: MaterialsPageProps) => {
    return (
        <div className={`${classes.materialsPage__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.materialsPage__content} cc-main-gutter-content`}>
                <div className={`${classes.materialsPage__pagePath}`}>
                    <PageTitle className={`${classes.materialsPage__path} cc-pb-13`} />
                </div>
                <section className={`${classes.materialsPage__gridWrapper}`}>
                    <MaterialsLoader />
                </section>
                <section className={`${classes.materialsPage__callback} cc-py-16 cc-laptop-py-18`}>
                    <CallbackSection />
                </section>
            </div>
        </div>
    );
};

export default MaterialsPage;