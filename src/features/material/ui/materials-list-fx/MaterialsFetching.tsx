import {FC} from "react";
import '@/app/scss/main.scss';

interface MaterialOverviewAdvantagesProps {
}

export const MaterialsFetching: FC<MaterialOverviewAdvantagesProps> = () => {
    return (
        <div className="cc-fs-500">Идет загрузка...</div>
    );
};