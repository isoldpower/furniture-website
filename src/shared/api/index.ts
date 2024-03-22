import imagesJson from './images.json';
import {ProgressiveImageType} from "@/shared/ui";

export const images: ProgressiveImageType[] = imagesJson.images;
export const getImage = (id: number) => images.find(image => image.id === id);
export const getAllImages = (ids: number[]) => ids.map(id => getImage(id));