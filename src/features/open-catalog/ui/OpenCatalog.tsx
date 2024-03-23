import {ButtonHTMLAttributes, FC, useEffect} from "react";
import '@/app/scss/main.scss';
import classes from './OpenCatalog.module.scss';
import {MenuSmall} from "@/shared/icons";
import {Button} from "@/shared/ui";
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {closeWindow, switchWindow, useAppDispatch, useTypedSelector} from "@/app/redux";
import {selectActiveWindows} from "@/app/redux/features/modal/modalSlice";

interface OpenCatalogProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const OpenCatalog: FC<OpenCatalogProps> = ({className, children, ...props}: OpenCatalogProps) => {
    const dispatch = useAppDispatch();
    const isActive = useTypedSelector(selectActiveWindows).find(window => window.identifier === 'catalog') !== undefined;
    const width = useDocumentSize().x;
    useEffect(() => {
        if (width <= breakpoints.laptop) dispatch(closeWindow('catalog'));
    }, [width, dispatch]);

    const switchCatalog = () => {
        dispatch(switchWindow('catalog'));
    }

    return (
        <Button className={`${classes.openCatalog__wrapper} ${className}`} data={{variant: 'primary'}} onClick={switchCatalog} semantic='button' {...props} aria-selected={isActive}>
            <div className={`${classes.openCatalog__content} cc-flex cc-gap-2`}>
                {children}
                <MenuSmall height={20} width={20}/>
            </div>
        </Button>
    );
};