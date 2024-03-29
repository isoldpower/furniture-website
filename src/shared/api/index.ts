import {ImageApiHandler} from "@/shared/api/image-api/model/ImageApiHandler";
import {ImageApiMockHandler} from "@/shared/api/image-api/model/ImageApiMockHandler";

export const imageApiHandler: ImageApiHandler = new ImageApiMockHandler();