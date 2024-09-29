import {ProductDetail} from "@/entities/product";
import {ApiHandler} from "@/shared/api/model/ApiHandler";

export interface ProductApiHandler extends ApiHandler<ProductDetail> {}