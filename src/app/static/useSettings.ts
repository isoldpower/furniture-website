import {useGetSettingsQuery} from "@/app/redux";
import {useEffect, useState} from "react";

export const useSettings = () => {
    const {currentData: settings, isLoading, isError, isSuccess} = useGetSettingsQuery();
    const [currentData, setCurrentData] = useState<{key: string, value: string}[]>();

    useEffect(() => {
        if(isLoading) return;

        if(isSuccess) setCurrentData(settings);
        else setCurrentData([]);

        console.log(settings);
    }, [isLoading]);

    const safeData = (key: string) => {
        if (!currentData) return 'загрузка...'
        return settings.find(element => element.key == key).value;
    }

    return {safeData};
}