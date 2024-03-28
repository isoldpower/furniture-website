import {Process} from "@/entities/process";

export interface ProcessApiHandler {
    getAll(): Process[];
    getItem(id: number): Process
    getItems(ids: number[]): Process[];
}