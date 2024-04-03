import {ProgressiveImageType} from "@/shared/ui";

export const imageDefault: ProgressiveImageType = {
    id: -1,
    high: 'loading...',
    low: 'loading...',
    alt: 'loading...'
}

export const imageFailed: ProgressiveImageType = {
    id: -2,
    high: 'fail',
    low: 'fail',
    alt: 'failed to load'
}