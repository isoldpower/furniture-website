import '@/app/scss/main.scss';
import {FC} from "react";

interface MaterialOverviewAdvantagesProps {
}

export const MaterialAdvantagesError: FC<MaterialOverviewAdvantagesProps> = () => {
    return (
        <div className="cc-fs-500">Ошибка :(</div>
    );
};