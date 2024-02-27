import {ButtonHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './OpenCatalog.module.scss';
import {Button} from "@/shared/ui/button/ui/Button";
import {MenuSmall} from "@/shared/icons";

interface OpenCatalogData {
}

interface OpenCatalogProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    data?: OpenCatalogData;
}

export const OpenCatalog: FC<OpenCatalogProps> = ({className, children, type, ...props}: OpenCatalogProps) => {
    const switchCatalog = () => {
        console.log('open catalog');
    }

    return (
        <>
            <Button onClick={switchCatalog} type='button' data={{variant: 'primary'}} className={`${classes.openCatalog__wrapper} ${className}`} {...props}>
                <div className={`${classes.openCatalog__content} cc-flex cc-gap-2`}>
                    {children}
                    <MenuSmall width={20} height={20}/>
                </div>
            </Button>
        </>
    );
};