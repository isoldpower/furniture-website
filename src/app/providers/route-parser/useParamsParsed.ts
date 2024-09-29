import {useContext, useEffect} from "react";
import {RouteParserContext} from "@/app/providers";

export const useParamsParsed = () => {
    const context = useContext(RouteParserContext);

    useEffect(() => {
        if (!context) {
            throw new Error('useParamsParsed must be used within a RouteParserContext');
        }
    }, [context]);

    return context;
}