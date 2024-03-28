import {AdvantageApiHandler} from "@/entities/advantage/api/AdvantageApiHandler";
import {Advantage} from "@/entities/advantage";

export class AdvantageMockApiHandler implements AdvantageApiHandler {
    constructor (json: Advantage[]) {
        this.advantages = json;
    }

    advantages: Advantage[];

    getAdvantage(id: number): Advantage {
        return this.advantages.find(advantage => advantage.id === id);
    }

    getAdvantages(ids: number[]): Advantage[] {
        return ids.map(id => this.advantages.find(advantage => advantage.id === id));
    }

    getAllAdvantages(): Advantage[] {
        return this.advantages;
    }
}