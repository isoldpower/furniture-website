import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import {Telegram, Vk, Whatsapp} from "@/shared/icons";
import {useLinkSections} from "@/entities/layout";
import {sections} from "@/widgets/layout/config";
import {Footer} from "@/entities/layout";
import {useSettings} from "@/app/static/useSettings";

interface WebsiteFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteFooter: FC<WebsiteFooterProps> = ({...props}: WebsiteFooterProps) => {
    const settings = useSettings();

    return (
        <Footer data={{
            sections: useLinkSections(sections),
            socials: [
                {
                    href: settings.safeData('VK_LINK'),
                    icon: <Vk color='#0077FF' height={24} width={24}/>
                },
                {
                    href: settings.safeData('WHATSAPP_LINK'),
                    icon: <Whatsapp color='#25D366' height={24} width={24}/>
                },
                {
                    href: settings.safeData('TELEGRAM_LINK'),
                    icon: <Telegram color='#229ED9' height={24} width={24}/>
                }
            ]
        }} {...props} />
    );
};