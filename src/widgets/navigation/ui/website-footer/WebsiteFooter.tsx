import {FC} from "react";
import '@/app/scss/main.scss';
import {CommercialInformation, FooterContacts, useLinks, Footer} from "@/entities/navigation";
import {sections, useSocials} from "../../config";

export const WebsiteFooter: FC = () => {
    return (
        <Footer
            basement={<CommercialInformation />}
            header={<FooterContacts socials={useSocials()}/>}
            sections={useLinks(sections)} />
    );
};