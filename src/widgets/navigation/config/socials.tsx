import {Telegram, Vk, Whatsapp} from "@/shared/icons";
import {useSettings} from "@/app/static";

export const useSocials = () => {
    const settings = useSettings();

    return [
        {href: settings.safeData('VK_LINK'), icon: <Vk color='#0077FF' height={24} width={24}/>},
        {href: settings.safeData('WHATSAPP_LINK'), icon: <Whatsapp color='#25D366' height={24} width={24}/>},
        {href: settings.safeData('TELEGRAM_LINK'), icon: <Telegram color='#229ED9' height={24} width={24}/>}
    ];
}