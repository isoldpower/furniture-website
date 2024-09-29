import globalApi from "../../../app/redux/api/globalApi";
import {Process} from "@/entities/process";
import {apiRoutes, PARTIALS_API_POSTFIX} from "@/app/static";

export const processApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getProcess: builder.query<Process[], void>({
            query: () => apiRoutes[PARTIALS_API_POSTFIX].process,
        }),
    })
});

export const {useGetProcessQuery} = processApi