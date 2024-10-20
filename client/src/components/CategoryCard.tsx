'use client';
import React from 'react';
import './../app/globals.css';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
  
type Props = {
    category: Category;
};

const CategoryCard = ({category}: Props) => {
  const router = useRouter();
  return (
    <Card className='w-80 h-56 m-2 cursor-pointer' onClick={() => router.push(`/categories/${category.id}`)}>
        <CardContent className='p-0'>
            <div className='flex flex-col justify-center items-center relative'>
            <img src={category.image} className='w-80 h-56 rounded-xl' />
            <h3 className='absolute bottom-3 text-2xl text-white uppercase font-semibold'>{category.name}</h3>
            {category.opening && <aside className='absolute -top-8 left-0 z-50 ribbon3 w-[200px] text-center text-white'>{'opens at ' + category.opening}</aside>}
            </div>
        </CardContent>
        
            
        
    </Card>
  );
};

export default CategoryCard;