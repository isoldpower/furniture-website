import {FC} from "react";
import '@/app/scss/main.scss';

interface PortfolioFetchingProps {
}

export const PortfolioFetching: FC<PortfolioFetchingProps> = () => {
    return (
        <div className="cc-fs-500">Идет загрузка...</div>
    );
};