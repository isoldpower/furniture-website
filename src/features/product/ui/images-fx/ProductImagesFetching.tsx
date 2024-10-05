import {FC} from "react";
import '@/app/scss/main.scss';
import {Load} from "@/shared/icons";

type ProductImagesFetchingProps = {
    className: string;
}

export const ProductImagesFetching: FC<ProductImagesFetchingProps> = ({ className }) => {
    return (
        <div className={`${className} cc-flex cc-justify-content-center cc-align-items-center`}>
            <Load />
        </div>
    );
};