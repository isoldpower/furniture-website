import {Process} from "@/entities/process";
import {ListMockApiHandler} from "@/shared/api/global/ListMockApiHandler";
import {ProcessApiHandler} from "@/entities/process/api/ProcessApiHandler";

export class ProcessMockApiHandler extends ListMockApiHandler<Process> implements ProcessApiHandler{
}