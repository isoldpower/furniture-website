import globalApi from "../../../app/redux/api/globalApi";
import {PortfolioItemData} from "@/entities/portfolio";

export const portfolioApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getPortfolio: builder.query<PortfolioItemData[], void>({
            query: () => 'landing/portfolio/'
        }),
    })
});

export const {useGetPortfolioQuery} = portfolioApi