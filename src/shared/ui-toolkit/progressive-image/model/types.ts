export type ProgressiveImage = {
    id: number;
    src: string;
    alt?: string;
    low_src: string;
}

export type ProgressiveImageData = Omit<ProgressiveImage, 'id'>;