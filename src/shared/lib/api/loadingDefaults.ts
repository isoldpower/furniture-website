import {ProgressiveImageType} from "@/shared/ui-toolkit";

export const imageDefault: ProgressiveImageType = {
    id: -1,
    high: 'loading...',
    low: 'loading...',
    alt: 'loading...'
}

export const imageFailed: ProgressiveImageType = {
    id: -2,
    high: 'https://i.ibb.co/bLjwzgJ/not-found.png',
    low: 'https://i.ibb.co/txRQBQy/not-found-low.png',
    alt: 'failed to load'
}