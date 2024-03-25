import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DocumentPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {AdaptiveLink, Button} from "@/shared/ui";
import {Icon, Logo} from "@/shared/icons";
import {websiteRoutes} from "@/shared/lib";
import {Document} from "@/pages/document-page/model";

interface PolicyPageProps extends BaseHTMLAttributes<HTMLDivElement> {
    document: Document;
}

const DocumentPage: FC<PolicyPageProps> = ({className, document, ...props}: PolicyPageProps) => {
    return (
        <div className={`${classes.policyPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.policyPage__content}`}>
                <div className={`${classes.policyPage__pathWrapper} cc-main-gutter cc-pt-9`}>
                    <PageTitle className={`${classes.policyPage__path} cc-main-gutter-content`} />
                </div>
                <div className={`cc-main-gutter`}>
                    <div className={`${classes.policyPage__viewWrapper} cc-main-gutter-content cc-flex gap-column-spacing cc-pt-9 cc-laptop-pt-13`}>
                        <div className={`${classes.policyPage__buttons} cc-flex cc-flex-col cc-align-items-center cc-gap-4 cc-pt-9`}>
                            <AdaptiveLink className="cc-flex cc-align-items-center cc-gap-2" to={websiteRoutes.home}>
                                <Icon className={`${classes.header__logoIcon}`} height={44} width={44} />
                                <Logo className={`${classes.header__logoText}`} height={28} width={148} />
                            </AdaptiveLink>
                            <Button className={`${classes.policyPage__button} cc-width-1of1`} data={{variant: 'primary'}} semantic="link" target="_blank" to={document.document}>Открыть в браузере</Button>
                            <Button className={`${classes.policyPage__button} cc-width-1of1`} data={{variant: 'accent'}} semantic="link" target="_blank" to={document.download}>Скачать файл</Button>
                        </div>
                        <div className={`${classes.policyPage__viewContainer}`}>
                            <iframe className={`${classes.policyPage__view} cc-main-gutter-content`} title="cozycraft-document" src={document.document} tabIndex={0} data-auto-height="true" data-aspect-ratio="0.7080062794348508" scrolling="no" frameBorder="0" />
                        </div>
                    </div>
                </div>
                <section className={`${classes.policyPage__callback} cc-py-15 cc-laptop-py-17`}>
                    <CallbackSection/>
                </section>
            </div>
        </div>
    );
};

export default DocumentPage;