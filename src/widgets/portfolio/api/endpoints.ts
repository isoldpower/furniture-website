import globalApi from "../../../app/redux/api/globalApi";
import {PortfolioItemData} from "@/entities/portfolio";
import {apiRoutes, PORTFOLIO_API_POSTFIX} from "@/app/static";

export const portfolioApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getPortfolio: builder.query<PortfolioItemData[], void>({
            query: () => apiRoutes[PORTFOLIO_API_POSTFIX].portfolio,
        }),
    })
});

export const {useGetPortfolioQuery} = portfolioApi