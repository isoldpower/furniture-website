import stepsJson from './mock/steps.json';
import {ProcessApiHandler} from "@/entities/process/api/ProcessApiHandler";
import {ProcessMockApiHandler} from "@/entities/process/api/ProcessMockApiHandler";

export const processApi: ProcessApiHandler = new ProcessMockApiHandler(stepsJson.steps);