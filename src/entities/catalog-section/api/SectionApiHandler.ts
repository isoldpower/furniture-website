import {Section, SectionDetail} from "@/entities/catalog-section";
import {ApiHandler} from "@/shared/api";

export interface SectionApiHandler extends ApiHandler<SectionDetail>{
    getSectionByPostfix: (postfix: string) => Promise<Section>;
    getSectionsChunk: (size: number) => Promise<Section[]>;
}