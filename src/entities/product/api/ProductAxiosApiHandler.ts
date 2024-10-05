import {ProductDetail} from "@/entities/product";
import {ProductApiHandler} from "@/entities/product";
import {AxiosApiHandler} from "@/shared/api/model/AxiosApiHandler";

export class ProductAxiosApiHandler extends AxiosApiHandler<ProductDetail> implements ProductApiHandler {}