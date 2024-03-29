import {ProgressiveImageType} from "@/shared/ui";

export interface ImageApiHandler {
    getImage: (id: number) => ProgressiveImageType;
    getAllImages: (ids: number[]) => ProgressiveImageType[];
}