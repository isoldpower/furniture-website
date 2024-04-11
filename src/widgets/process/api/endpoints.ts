import globalApi from "../../../app/redux/api/globalApi";
import {Process} from "@/entities/process";

export const processApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getProcess: builder.query<Process[], void>({
            query: () => 'landing/process/'
        }),
    })
});

export const {useGetProcessQuery} = processApi