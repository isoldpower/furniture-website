import {Section, SectionApiHandler, SectionDetail} from "@/entities/catalog-section";
import {MockApiHandler} from "@/shared/api/model/MockApiHandler";

export class SectionMockApiHandler extends MockApiHandler<SectionDetail> implements SectionApiHandler {
    getSectionsChunk = (size: number): Promise<Section[]> => {
        return new Promise(() => this.items.slice(0, size));
    }

    getSectionByPostfix = (postfix: string): Promise<Section> => {
        return new Promise(() => this.items.find(item => item.href_postfix == postfix))
    }
}