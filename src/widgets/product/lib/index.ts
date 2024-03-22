import {getAllImages} from "@/shared/api";
import {getImageIdsByProductId, getMaterialIdsByProductId} from "@/widgets/product";
import {getAllMaterials} from "@/widgets/material/api";

export const getImages = (id: number) => getAllImages(getImageIdsByProductId(id)) ?? [{high: '', low: '', alt: 'undefined'}];
export const getMaterials = (id: number) => getAllMaterials(getMaterialIdsByProductId(id)) ?? [];