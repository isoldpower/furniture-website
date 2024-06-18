import {FC} from "react";
import '@/app/scss/main.scss';

interface PortfolioErrorProps {
}

export const PortfolioError: FC<PortfolioErrorProps> = () => {
    return (
        <div className="cc-fs-500">Ошибка :(</div>
    );
};