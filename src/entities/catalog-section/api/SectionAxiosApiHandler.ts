import {AxiosApiHandler} from "@/shared/api";
import {Section, SectionApiHandler, SectionDetail} from "@/entities/catalog-section";

export class SectionAxiosApiHandler extends AxiosApiHandler<SectionDetail> implements SectionApiHandler {
    getSectionByPostfix = (postfix: string): Promise<Section> => {
        return this.axios.get<Section[]>(this.baseApiRequest)
            .then(response => response.data)
            .then(data => data.find(section => section.href_postfix == postfix));
    }

    getSectionsChunk = (size: number): Promise<Section[]> => {
        return this.axios.get<Section[]>(this.baseApiRequest)
            .then(response => response.data)
            .then(data => data.slice(0, size));
    }
}