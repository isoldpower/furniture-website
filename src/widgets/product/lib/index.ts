import {imageApiHandler} from "@/shared/api";
import {materialsApi} from "@/widgets/material/api";
import {productsApi} from "@/widgets/product";

export const getImages = (id: number) => imageApiHandler.getAllImages(productsApi.getImageIds(id)) ?? [{high: '', low: '', alt: 'undefined'}];
export const getMaterials = (id: number) => materialsApi.getMaterials(productsApi.getMaterialIds(id));