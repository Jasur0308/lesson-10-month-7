import { api } from "./index";

const profileApi=api.injectEndpoints({
    endpoints:(build)=>({
        getProfile:build.query({
            query:()=>({
                url:"/auth/profile",
                
            })
        })
    })
})
export const {useGetProfileQuery}=profileApi