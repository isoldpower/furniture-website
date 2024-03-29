import {Process} from "@/entities/process";
import {ListMockApiHandler} from "@/shared/lib/api/ListMockApiHandler";
import {ProcessApiHandler} from "@/entities/process/api/ProcessApiHandler";

export class ProcessMockApiHandler extends ListMockApiHandler<Process> implements ProcessApiHandler{
}