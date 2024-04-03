import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './SideHeaderSections.module.scss';
import {SectionHeaderCard} from "@/entities/catalog-section/ui/section-header-card/SectionHeaderCard";
import {useGetAllSectionsQuery} from "@/app/redux";

interface SideHeaderSectionsProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const SideHeaderSections: FC<SideHeaderSectionsProps> = () => {
    const {currentData : sections, isLoading, isError} = useGetAllSectionsQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <div className={`${classes.header__catalogPreview} cc-grid cc-gap-7`}>
            {sections.map((section, key) => (
                <SectionHeaderCard data={section} key={key}/>
            ))}
        </div>
    )
};