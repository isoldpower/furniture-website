import {ImageApiHandler} from "@/shared/api/model/ImageApiHandler";
import {ProgressiveImageType} from "@/shared/ui";
import {ListMockApiHandler} from "@/shared/lib/api/ListMockApiHandler";

export class ImageApiMockHandler extends ListMockApiHandler<ProgressiveImageType> implements ImageApiHandler {
}