'use client';
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { decreaseQty, increaseQty } from '@/lib/features/cartSlice';
import { Minus, Plus } from 'lucide-react';

type Props = {
        item: CartItem,
};

const CartItem = ({item: {id, name, price, qty, imageUrl} }: Props) => {
    const dispatch = useDispatch();
  return (
        <Card className='w-full mb-4'>
            <CardHeader>
              <CardTitle className='' >
              {name}
              </CardTitle>
             
            </CardHeader>
            <CardContent className=' '>
                <img src={imageUrl} />
            </CardContent>
            <CardFooter className='flex justify-end '>
                <div className="flex flex-col items-center">
                    <div className="flex gap-4 items-center mb-4">
                        <Button variant='outline' disabled={qty==0} onClick={() => dispatch(decreaseQty(id))}><Minus /></Button>
                        <p className='text-xl font-bold'>{qty}</p>
                        <Button variant='outline' onClick={() => dispatch(increaseQty(id))}><Plus /></Button>
                    </div>
                    <p className='text-xl font-bold'>{price.value} &nbsp; {price.currency}</p>
                </div>
            </CardFooter>
        </Card>
  );
};

export default CartItem;