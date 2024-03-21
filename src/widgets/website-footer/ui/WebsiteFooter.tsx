import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import {sections} from "@/widgets/website-footer/api";
import {Telegram, Vk, Whatsapp} from "@/shared/icons";
import {Footer} from "@/entities";
import {placeSections} from "@/entities/layout/lib";

interface WebsiteFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteFooter: FC<WebsiteFooterProps> = ({...props}: WebsiteFooterProps) => {
    return (
        <Footer data={{
            sections: placeSections(sections),
            links: [
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