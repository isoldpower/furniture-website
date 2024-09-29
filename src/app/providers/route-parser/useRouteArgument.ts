import {useParams} from "react-router-dom";
import {useEffect, useMemo, useRef, useState} from "react";

export type UseRouteArgumentReturn<T> = {
    isLoading: boolean;
    isError: boolean;
    currentData?: T;
};

//eslint-disable-next-line
export const useRouteArgument = <T extends {id: number, href_postfix: string}, D extends T = T>(
    parse: {currentData?: T[], isError: boolean, isLoading: boolean},
    getItem: (id: number) => Promise<D>,
    routeParam: string
): UseRouteArgumentReturn<D> => {
    const params = useParams();
    const item = useMemo(() => params[routeParam], [routeParam, params]);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [currentData, setCurrentData] = useState(undefined);

    const dictionary = useRef<{ [name: string]: string }>({});

    useEffect(() => {
        if (parse.currentData) {
            parse.currentData.forEach(product => {
                const clearPostfix = product.href_postfix.replaceAll('/', '');
                dictionary.current[clearPostfix] = product.id.toString();
            });
        }
    }, [parse.currentData]);

    useEffect(() => {
        if (item && dictionary.current[item]) {
            getItem(parseInt(dictionary.current[item]))
                .then((product) => setCurrentData(product))
                .catch(() => setIsError(true))
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
            setCurrentData(undefined);
        }
    }, [getItem, item, parse.currentData]);

    return {
        isLoading,
        isError,
        currentData
    };
}