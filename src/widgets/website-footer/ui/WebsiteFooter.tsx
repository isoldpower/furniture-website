import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import {Footer} from "@/entities/footer/ui/Footer";
import {placeSections} from "@/features/place-sections/lib/placeLinkSections";
import {sections} from "@/widgets/website-footer/api";
import {Telegram, Vk, Whatsapp} from "@/shared/icons";

interface WebsiteFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteFooter: FC<WebsiteFooterProps> = ({...props}: WebsiteFooterProps) => {
    return (
        <Footer data={{
            sections: placeSections(sections),
            links: [
                {
                    href: 'https://vk.com/undefined',
                    icon: <Vk width={24} height={24} color={'#0077FF'} />
                },
                {
                    href: 'https://whatsapp.com/undefined',
                    icon: <Whatsapp width={24} height={24} color={'#25D366'} />
                },
                {
                    href: 'https://telegram.com/undefined',
                    icon: <Telegram width={24} height={24} color={'#229ED9'} />
                }
            ]
        }} {...props} />
    );
};