import {ImageApiHandler, MockApiHandler} from "@/shared/api";
import {ProgressiveImageType} from "@/shared/ui-toolkit";

export class ImageApiMockHandler extends MockApiHandler<ProgressiveImageType> implements ImageApiHandler {
}