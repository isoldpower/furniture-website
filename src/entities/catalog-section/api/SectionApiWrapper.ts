import {SectionApiHandler} from "@/entities/catalog-section/api/SectionApiHandler";
import {Section} from "@/entities/catalog-section";

export class SectionApiWrapper {
    constructor(apiHandler : SectionApiHandler) {
        this.apiHandler = apiHandler;
    }

    private apiHandler: SectionApiHandler;

    getByPostfix(postfix: string): Section {
        const allSections = this.apiHandler.getAll();
        return allSections.find(section => section.hrefPostfix === postfix);
    }

    getById(id: number): Section {
        const allSections = this.apiHandler.getAll();
        return allSections.find(section => section.id === id);
    }

    getAll(): Section[] {
        return this.apiHandler.getAll();
    }

    getChunk(size: number, startIndex: number = 0): Section[] {
        const allSections = this.apiHandler.getAll();
        return allSections.slice(startIndex, startIndex + size);
    }
}