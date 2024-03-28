import {Section} from "@/entities/catalog-section";

export interface SectionApiHandler {
    getAll: () => Section[];
}