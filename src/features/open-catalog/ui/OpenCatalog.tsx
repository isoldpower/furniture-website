import {ButtonHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './OpenCatalog.module.scss';
import {MenuSmall} from "@/shared/icons";
import {Button} from "@/shared/ui";

interface OpenCatalogData {
}

interface OpenCatalogProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    data?: OpenCatalogData;
}

export const OpenCatalog: FC<OpenCatalogProps> = ({className, children, ...props}: OpenCatalogProps) => {
    const switchCatalog = () => {
        console.log('open catalog-page');
    }

    return (
        <Button className={`${classes.openCatalog__wrapper} ${className}`} data={{variant: 'primary'}} onClick={switchCatalog} semantic='button' {...props}>
            <div className={`${classes.openCatalog__content} cc-flex cc-gap-2`}>
                {children}
                <MenuSmall height={20} width={20}/>
            </div>
        </Button>
    );
};