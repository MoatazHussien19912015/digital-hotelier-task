'use client';
import ItemCard from '@/components/ItemCard';
import { setError } from '@/lib/features/itemsSlice';
import { useGetCategoriesQuery } from '@/lib/services/categoriesApi';
import { useGetItemsQuery } from '@/lib/services/itemsApi';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useToast } from "@/hooks/use-toast";
type Props = {
    params: {
        categoryId: string;
    }
};

const page = ({params}: Props) => {
    const {data: items, error} = useGetItemsQuery(params.categoryId);
    const dispatch = useDispatch();
    const { toast } = useToast();
    useEffect(() => {
       
        if(error) { 
         dispatch(setError(error));
         // checking the error type to show it
         if ('status' in error) { // FetchBaseQueryError
           const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
           toast({title: 'Error', description: errMsg, variant: "destructive"});
         } else { // serializable error
           toast({title: 'Error', description: error.message, variant: "destructive"});
         }
           }
       }, [ error]);
  return (
    <main>
        <div className='flex flex-col items-center  w-full p-5'>
            {items?.map((item, i) => <ItemCard key={i} item={item} />)}
            {items && !items.length && <h1 className='text-3xl font-medium'>no items yet for this category</h1>}
        </div>
    </main>
  );
};

export default page;

 async function generateStaticParams () {
    const {data: categories, error: getCategoriesError} = useGetCategoriesQuery();
    return categories?.map(category => ({categoryId: category.id}));
}