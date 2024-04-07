import {sectionApi} from "@/widgets/catalog-section";
import {productsApi} from "@/widgets/product";
import {useCallback, useEffect, useState} from "react";
import {Section} from "@/entities/catalog-section";
import {Product} from "@/entities/product";

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

    const setItems = (items: Product[]) => {
        for (const item of items) {
            const section = item.section;
            setItemRoutes(current => {
                return ({...current, [section.href_postfix + item.href_postfix]: item.title});
            })
        }
    }

    useEffect(() => {
        productsApi.getAll()
            .then(products => setItems(products))
            .catch(error => console.warn('product error:', error));
    }, [])

    return itemRoutes;
}
