import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsPage.module.scss';

interface MaterialsPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const MaterialsPage: FC<MaterialsPageProps> = ({className, ...props}: MaterialsPageProps) => {
    return (
        <div className={`${classes.materialsPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.materialsPage__content}`}>
                <h1 className={'cc-heading-1'}>MATERIALS</h1>
            </div>
        </div>
    );
};

export default MaterialsPage;