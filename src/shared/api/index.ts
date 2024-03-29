import {ImageApiHandler} from "@/shared/api/model/ImageApiHandler";
import {ImageApiMockHandler} from "@/shared/api/model/ImageApiMockHandler";

export const imageApiHandler: ImageApiHandler = new ImageApiMockHandler();