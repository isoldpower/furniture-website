import '@/app/scss/main.scss';
import {FC} from "react";

interface MaterialOverviewAdvantagesProps {
}

export const MaterialsError: FC<MaterialOverviewAdvantagesProps> = () => {
    return (
        <div className="cc-fs-500">Ошибка :(</div>
    );
};