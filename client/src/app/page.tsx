'use client';
import CategoryCard from "@/components/CategoryCard";
import { Input } from "@/components/ui/input";
import { selectCategories } from "@/lib/features/categoriesSlice";
import { Search } from "lucide-react";
import { useSelector } from "react-redux";

export default function Home() {
  const categories: Category[] = useSelector(selectCategories);
  

  return (
    <main className="w-full my-8">
      <div className="relative w-5/6 mx-auto">
      <Input type="search" placeholder="Search For Categories..." className='text-xl w-full h-12 pl-8 text-center'
      />
      <Search className='absolute left-2 top-2' />
      </div>
      <div className='grid grid-cols-2 place-items-center'>
        {categories?.map((cat: Category, i) => (<CategoryCard key={i} category={cat} />))}
      </div>
    </main>
  );
}
