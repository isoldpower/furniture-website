import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsPage.module.scss';
import {materials} from "@/widgets/material/api";
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {MaterialOverview} from "@/widgets/material/ui/material-overview/MaterialOverview";

interface MaterialsPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const MaterialsPage: FC<MaterialsPageProps> = ({className, ...props}: MaterialsPageProps) => {
    return (
        <div className={`${classes.materialsPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.materialsPage__content}`}>
                <div className={`${classes.materialsPage__pagePath} cc-main-gutter`}>
                    <PageTitle className={`${classes.materialsPage__path} cc-pb-13 cc-main-gutter-content`} />
                </div>
                <div className={`${classes.materialsPage__gridWrapper} cc-main-gutter`}>
                    <div className={`${classes.materialsPage__grid} cc-grid cc-gap-16 cc-laptop-gap-18 cc-main-gutter-content`}>
                        {materials.map((material, key) => (
                            <MaterialOverview data={material} key={key} />
                        ))}
                    </div>
                </div>
                <section className={`${classes.materialsPage__callback} cc-py-16 cc-laptop-py-18`}>
                    <CallbackSection />
                </section>
            </div>
        </div>
    );
};

export default MaterialsPage;