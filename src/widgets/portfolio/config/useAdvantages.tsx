import {useSettings} from "@/app/static";

export const useAdvantages = () => {
    const settings = useSettings();

    return [
        {title: settings.safeData('ABOUT_STATISTIC1_TITLE'), number: settings.safeData('ABOUT_STATISTIC1_NUMBER')},
        {title: settings.safeData('ABOUT_STATISTIC2_TITLE'), number: settings.safeData('ABOUT_STATISTIC2_NUMBER')},
        {title: settings.safeData('ABOUT_STATISTIC3_TITLE'), number: settings.safeData('ABOUT_STATISTIC3_NUMBER')}
    ];
}