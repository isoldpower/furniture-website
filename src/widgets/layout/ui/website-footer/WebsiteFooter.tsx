import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import {Telegram, Vk, Whatsapp} from "@/shared/icons";
import {useLinkSections} from "@/entities/layout/lib";
import {sections} from "@/widgets/layout/config";
import {Footer} from "@/entities/layout";

interface WebsiteFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteFooter: FC<WebsiteFooterProps> = ({...props}: WebsiteFooterProps) => {
    return (
        <Footer data={{
            sections: useLinkSections(sections),
            socials: [
                {
                    href: 'https://vk.com/undefined',
                    icon: <Vk color='#0077FF' height={24} width={24}/>
                },
                {
                    href: 'https://whatsapp.com/undefined',
                    icon: <Whatsapp color='#25D366' height={24} width={24}/>
                },
                {
                    href: 'https://telegram.com/undefined',
                    icon: <Telegram color='#229ED9' height={24} width={24}/>
                }
            ]
        }} {...props} />
    );
};