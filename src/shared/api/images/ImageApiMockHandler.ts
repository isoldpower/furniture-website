import {ImageApiHandler} from "@/shared/api/images/ImageApiHandler";
import {ProgressiveImageType} from "@/shared/ui";
import {MockApiHandler} from "@/shared/api/model/MockApiHandler";

export class ImageApiMockHandler extends MockApiHandler<ProgressiveImageType> implements ImageApiHandler {
}