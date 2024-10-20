'use client';
import { selectCart } from '@/lib/features/cartSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from './ui/button';

type Props = {};

const CartIcon = (props: Props) => {
    const {itemCount} = useSelector(selectCart);
    const router = useRouter();

  return (
    <Button variant='ghost' className="relative w-20 mt-2 cursor-pointer" disabled={itemCount==0}>
            <img src={'/icons/cart-icon-2.png'} className={`w-8 h-8 bg-gray-300 `} alt="shopping-cart icon"/>
             {itemCount >= 0?<span className="text-white bg-black absolute right-4 top-0 px-1 rounded-sm">{itemCount}</span>:null}  
    </Button>
  );
};

export default CartIcon;