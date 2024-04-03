export interface TitleRequest {
    title: string;
    priority: number;
}

export interface TitleState {
    globalPrefix?: string;
    defaultTitle: string;
    titleStack: TitleRequest[];
}