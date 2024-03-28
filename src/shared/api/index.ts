import {ImageApiHandler} from "@/shared/api/model/ImageApiHandler";
import {ImageApiMockHandler} from "./model/ImageApiMockHandler";

export const imageApiHandler: ImageApiHandler = new ImageApiMockHandler();