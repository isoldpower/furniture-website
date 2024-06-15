import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './SideHeaderSectionsFx.module.scss';
import {SectionHeaderCard} from "@/entities/catalog-section";
import {useGetAllSectionsQuery} from "@/features/catalog-section";

interface SideHeaderSectionsProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const SideHeaderSectionsFx: FC<SideHeaderSectionsProps> = () => {
    const {currentData : sections, isLoading, isError} = useGetAllSectionsQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <div className={`${classes.header__catalogPreview} cc-grid cc-gap-7`}>
            {sections.slice(0, 4).map((section, key) => (
                <SectionHeaderCard data={section} key={key}/>
            ))}
        </div>
    )
};