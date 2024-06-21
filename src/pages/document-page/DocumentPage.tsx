import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './DocumentPage.module.scss';
import {AdaptiveLink, Button} from "@/shared/ui-toolkit";
import {Icon, Logo} from "@/shared/icons";
import {websiteRoutes} from "@/shared/lib";
import {PageTitle} from "@/widgets/navigation";
import {CallbackSection} from "@/widgets/feedback";

export interface Document {
    download: string;
    document: string;
}

type PolicyPageProps = {
    document: Document;
}

const DocumentPage: FC<PolicyPageProps> = ({document}: PolicyPageProps) => {
    return document ? (
        <div className={`${classes.policyPage__content} cc-main-gutter`}>
            <div className={`${classes.policyPage__pathWrapper} cc-pt-9`}>
                <PageTitle className={`${classes.policyPage__path}`} />
            </div>
            <div className={`${classes.policyPage__viewWrapper} cc-flex gap-column-spacing cc-pt-9 cc-laptop-pt-13`}>
                <div className={`${classes.policyPage__buttons} cc-flex cc-flex-col cc-align-items-center cc-gap-4 cc-pt-9`}>
                    <AdaptiveLink className="cc-flex cc-align-items-center cc-gap-2" to={websiteRoutes.home}>
                        <Icon className={`${classes.header__logoIcon}`} height={44} width={44} />
                        <Logo className={`${classes.header__logoText}`} height={28} width={148} />
                    </AdaptiveLink>
                    <Button className={`${classes.policyPage__button} cc-width-1of1`} data={{variant: 'primary'}} semantic="link" target="_blank" to={document.document}>Открыть в браузере</Button>
                    <Button className={`${classes.policyPage__button} cc-width-1of1`} data={{variant: 'accent'}} semantic="link" target="_blank" to={document.download}>Скачать файл</Button>
                </div>
                <div className={`${classes.policyPage__viewContainer}`}>
                    <iframe className={`${classes.policyPage__view}`} data-aspect-ratio="0.7080062794348508" data-auto-height="true" frameBorder="0" scrolling="no" src={document.document} tabIndex={0} title="cozycraft-document" />
                </div>
            </div>
            <section className={`${classes.policyPage__callback} cc-py-15 cc-laptop-py-17`}>
                <CallbackSection/>
            </section>
        </div>
    ) : undefined;
};

export default DocumentPage;