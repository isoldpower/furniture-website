import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import {ImagesSlider} from "@/features/product";
import {useGetProductImagesQuery} from "@/widgets/product";


interface ProductOverviewImagesProps extends BaseHTMLAttributes<HTMLDivElement> {
    productId: number;
}

export const ProductOverviewImages: FC<ProductOverviewImagesProps> = ({productId}: ProductOverviewImagesProps) => {
    const {currentData : images, isLoading, isError} = useGetProductImagesQuery(productId);

    if (isLoading) if(isLoading) return <div className="cc-fs-200">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-200">Ошибка :(</div>

    return (
        <ImagesSlider images={images} />
    );
};