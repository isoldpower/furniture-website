import {SectionApiHandler} from "@/entities/catalog-section/api/SectionApiHandler";
import {Section} from "@/entities/catalog-section";

export class SectionMockApiHandler implements SectionApiHandler {
    constructor(sections: Section[]) {
        this.sections = sections;
    }

    sections: Section[];

    getAll(): Section[] {
        return this.sections;
    }
}