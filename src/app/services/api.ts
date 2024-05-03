import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query";
import {RootState} from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl:"http://localhost:8000",

});

const baseQueryWithRetry = retry(baseQuery,{maxRetries:1})

export const api = createApi({
    reducerPath:'splitApi',
    baseQuery:baseQueryWithRetry,
    refetchOnMountOrArgChange:true,
    endpoints:()=>({}),
})