import {ImageApiHandler} from "@/shared/api/model/ImageApiHandler";
import {ImageApiMockHandler} from "@/shared/api/model/ImageApiMockHandler";
import imagesJson from './images.json';

export const imageApiHandler: ImageApiHandler = new ImageApiMockHandler(imagesJson.images);