import {Advantage} from "@/entities/advantage";

export interface AdvantageApiHandler {
    getAdvantage: (id: number) => Advantage;
    getAdvantages: (ids: number[]) => Advantage[];
    getAllAdvantages: () => Advantage[];
}