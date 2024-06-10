import {useGetSettingsQuery} from "@/app/redux";
import {useEffect, useState} from "react";

export const useSettings = () => {
    const {currentData: settings, isLoading, isSuccess} = useGetSettingsQuery();
    const [currentData, setCurrentData] = useState<{key: string, value: string}[]>();

    useEffect(() => {
        if(isLoading) return;

        if(isSuccess) setCurrentData(settings);
        else setCurrentData([]);
    }, [isLoading, isSuccess, settings]);

    const safeData = (key: string) => {
        if (!currentData) return `загрузка ${key}`;
        return currentData?.find(element => element.key == key)?.value ?? `ошибка ${key}`;
    }

    return {safeData};
}