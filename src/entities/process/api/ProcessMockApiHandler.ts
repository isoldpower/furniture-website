import {ProcessApiHandler} from "@/entities/process/api/ProcessApiHandler";
import {Process} from "@/entities/process";

export class ProcessMockApiHandler implements ProcessApiHandler {
    constructor(steps: Process[]) {
        this.steps = steps;
    }

    private readonly steps: Process[]

    getAll(): Process[] {
        return this.steps;
    }

    getItem(id: number): Process {
        return this.steps.find(step => step.id === id);
    }

    getItems(ids: number[]): Process[] {
        return ids.map(id => {
            return this.steps.find(step => step.id === id);
        })
    }
}