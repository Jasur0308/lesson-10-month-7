import { api } from "./index";

const singlePage = api.injectEndpoints({
  endpoints: (build) => ({
    getSinglePage: build.query({
      query: (id) => ({
        url: `product/single-product/${id}`
      }),
    })
  }),
});

export const { useGetSinglePageQuery } = singlePage;