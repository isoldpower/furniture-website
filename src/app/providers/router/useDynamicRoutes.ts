import {useCallback, useEffect, useState} from "react";
import {Section, SectionDetail} from "@/entities/catalog-section";
import {sectionApi} from "@/widgets/catalog-section";

export const useSectionRoutes = () => {
    const [sectionRoutes, setSectionRoutes] = useState<{[route: string]: string}>({});

    const setSections = useCallback((sections: Section[]) => {
        for (const section of sections) {
            setSectionRoutes(current => {
                return ({...current, [section.href_postfix]: section.title});
            })
        }
    }, [])

    useEffect(() => {
        sectionApi.getAll()
            .then(sections => setSections(sections))
            .catch(error => console.warn('section error:', error));
    }, [setSections]);

    return sectionRoutes;
}

export const useItemRoutes = () => {
    const [itemRoutes, setItemRoutes] = useState<{[name: string]: string}>({});

    const setItems = (sections: SectionDetail[]) => {
        for (const section of sections) {
            for (const product of section.products) {
                setItemRoutes(current => {
                    return ({...current, [section.href_postfix + product.href_postfix]: product.title});
                })
            }
        }
    }

    useEffect(() => {
        sectionApi.getAll()
            .then(products => setItems(products))
            .catch(error => console.warn('product error:', error));
    }, [])

    return itemRoutes;
}
