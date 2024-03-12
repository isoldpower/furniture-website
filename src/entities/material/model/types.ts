export interface MaterialData {
    src: string;
    title: string;
    paragraph: string;
    href: string;
}

export interface MaterialDisplayData extends MaterialData {
    buttonText: string;
}