import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'        
    }),
    
    endpoints: (builder) => ({
        
        getItems: builder.query<Item[], string>({
            query: (category) => {  return {
                url: `/items?cat=${category}`,
                method: 'GET',
              }}
        }),

    
       
      
    })
});


export const { useGetItemsQuery } = itemsApi;