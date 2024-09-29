import {ProgressiveImageType} from "@/shared/ui-toolkit";

export const imageDefault: ProgressiveImageType = {
    id: -1,
    src: 'loading...',
    low_src: 'loading...',
    alt: 'loading...'
}

export const imageFailed: ProgressiveImageType = {
    id: -2,
    src: 'https://i.ibb.co/bLjwzgJ/not-found.png',
    low_src: 'https://i.ibb.co/txRQBQy/not-found-low.png',
    alt: 'failed to load'
}