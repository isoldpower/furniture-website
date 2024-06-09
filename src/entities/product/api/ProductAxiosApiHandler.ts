import {Product, ProductDetail} from "@/entities/product";
import {ProductApiHandler} from "@/entities/product";
import {AxiosApiHandler} from "@/shared/api/model/AxiosApiHandler";

export class ProductAxiosApiHandler extends AxiosApiHandler<Product> implements ProductApiHandler {
    getProductDetail = (id: number): Promise<ProductDetail> => {
        return this.axios.get(this.baseApiRequest + id)
            .then(response => ({
                ...response.data,
                images: [],
                materials: []
            }))
    }

    getProductByPostfix = (postfix: string): Promise<ProductDetail> => {
        return this.axios.get<ProductDetail[]>(this.baseApiRequest)
            .then(response => response.data)
            .then(data => data.find(product => product.href_postfix == postfix));
    }

    getProductsBySection = (sectionId: number): Promise<Product[]> => {
        return this.axios.get<ProductDetail[]>(this.baseApiRequest)
            .then(response => response.data)
            .then(data => data.filter(product => product.section.id == sectionId));
    }
}