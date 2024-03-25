import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DocumentPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {AdaptiveLink, Button} from "@/shared/ui";
import {Icon, Logo} from "@/shared/icons";
import {websiteRoutes} from "@/shared/lib";

interface PolicyPageProps extends BaseHTMLAttributes<HTMLDivElement> {
    documentSrc: string;
}

const DocumentPage: FC<PolicyPageProps> = ({className, documentSrc, ...props}: PolicyPageProps) => {
    return (
        <div className={`${classes.policyPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.policyPage__content}`}>
                <div className={`${classes.policyPage__pathWrapper} cc-main-gutter cc-pt-9`}>
                    <PageTitle className={`${classes.policyPage__path} cc-main-gutter-content`} />
                </div>
                <div className={`${classes.policyPage__viewWrapper} cc-main-gutter cc-flex gap-column-spacing cc-pt-9 cc-laptop-pt-13`}>
                    <div className={`${classes.policyPage__buttons} cc-flex cc-flex-col cc-align-items-center cc-gap-4 cc-pt-9`}>
                        <AdaptiveLink className="cc-flex cc-align-items-center cc-gap-2" to={websiteRoutes.home}>
                            <Icon className={`${classes.header__logoIcon}`} height={44} width={44} />
                            <Logo className={`${classes.header__logoText}`} height={28} width={148} />
                        </AdaptiveLink>
                        <Button className={`${classes.policyPage__button} cc-width-1of1`} data={{variant: 'primary'}} semantic="link" target="_blank" to="https://cozycraft-policy.tiiny.site/">Открыть в браузере</Button>
                        <Button className={`${classes.policyPage__button} cc-width-1of1`} data={{variant: 'accent'}} semantic="link" to="https://drive.google.com/uc?export=download&id=1ZWDCYxqbkTSMvFi9Bw6YSFgyWaNsVsLZ">Скачать файл</Button>
                    </div>
                    <iframe className={`${classes.policyPage__view} cc-main-gutter-content`} src={documentSrc}/>
                </div>
                <section className={`${classes.policyPage__callback} cc-py-15 cc-laptop-py-17`}>
                    <CallbackSection />
                </section>
            </div>
        </div>
    );
};

export default DocumentPage;