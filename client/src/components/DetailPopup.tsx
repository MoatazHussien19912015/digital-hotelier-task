'use client';
import React, { ReactNode } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from './ui/button';
import { clearCart, selectCart } from '@/lib/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
  
type Props = {
    title: string;
    open?: boolean;
    onShow?: () => void;
    onClose: () => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

};

const DetailPopup = ({title, onShow, onClose, open, setOpen}: Props) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
  return (
    <Popover onOpenChange={(open) => !open?onClose():null} open={open} >
      <PopoverTrigger asChild>
        <Button variant="outline" onClick={onShow} className='bg-[#1406e0] text-white font-semibold'>{title}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px]">
      <div className='flex flex-col'>
      {cart?.cartItems?.map(item => (<CartItem key={item.id} item={item} />))}
      <p className='text-xl font-medium'># of Items: {cart.itemCount}</p>
      <p className='text-xl font-medium mb-10'>Total Price: {cart.total}</p>

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Digital Hotelier</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> {cart?.total} {cart?.cartItems[0]?.price.currency}</span>
        </h2>
      </div>
      
      {cart.cartItems.length == 0?<div className="flex justify-center items-center w-full h-20">
      <h1 className='text-7xl fot-bold '>Cart is Empty</h1>
      </div>:null}
      <Button onClick={() => {dispatch(clearCart({})); setOpen(false); }}>Clear Cart</Button>
    </div>
      </PopoverContent>
    </Popover>
  );
};

export default DetailPopup;