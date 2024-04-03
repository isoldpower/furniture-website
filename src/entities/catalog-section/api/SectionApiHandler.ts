import {Section} from "@/entities/catalog-section";
import {ApiHandler} from "@/shared/api/model/ApiHandler";

export interface SectionApiHandler extends ApiHandler<Section>{
    getSectionByPostfix: (postfix: string) => Promise<Section>;
    getSectionsChunk: (size: number) => Promise<Section[]>;
}