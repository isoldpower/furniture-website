import {ImageApiHandler} from "@/shared/api/model/ImageApiHandler";
import {ProgressiveImageType} from "@/shared/ui";
import imagesJson from '../images.json';

export class ImageApiMockHandler implements ImageApiHandler {
    constructor() {
        this.images = imagesJson.images;
    }

    images: ProgressiveImageType[];

    getImage(id: number): ProgressiveImageType {
        return this.images.find(image => image.id === id);
    }

    getAllImages(ids: number[]): ProgressiveImageType[] {
        return ids.map(id => this.images.find(image => image.id === id));
    }
}