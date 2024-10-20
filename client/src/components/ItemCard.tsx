'use client';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carrot, Fish, Nut, Wheat } from 'lucide-react';
import DetailPopup from './DetailPopup';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQty, selectCart } from '@/lib/features/cartSlice';
type Props = {
    item: Item;
};

const ItemCard = ({item}: Props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCart).cartItems;
    const [open, setOpen] = useState(false);
  return (
    <Card className='h-80 my-5  max-sm:h-auto max-sm:w-auto max-sm:mx-3 mx-5 w-auto min-w-full '>
        <CardContent className='p-0'>
            <div className='flex max-sm:flex-col max-sm:items-center'>
                <img src={item.image} alt='' className=' h-80 w-80 rounded-xl max-sm:w-full' />
                <div className='flex flex-col w-full gap-4 p-8 pt-2 max-sm:p-2 max-sm:pt-2 max-sm:items-center'>
                    <h2 className='text-2xl font-semibold line-clamp-1 max-sm:text-lg max-sm:text-center'>{item.name}</h2>
                    <p className='text-xl font-medium line-clamp-3 max-sm:text-sm max-sm:text-center'>{item.description}</p>
                    <div className='flex'>{item.tags?.map((tag: string) => (<span key={tag} className=' mr-5 relative rounded-full w-20 h-20 shadow-md border-black'>
                        {tag == 'fish'?<Fish color="#000000" className='absolute top-[40%] left-[30%]' />:tag == 'pasta'?
                        <Wheat color="#000000" className='absolute top-[40%] left-[30%]' />: tag == 'middle east'?
                        <Nut color="#000000" className='absolute top-[40%] left-[35%]' />:<Carrot color="#000000" className='absolute top-[40%] left-[35%]' />}
                    </span>))}</div>
                    <div className='flex justify-between mt-5 w-full text-lg items-center max-sm:mt-2 max-sm:mb-5 max-sm:px-5 '>
                        <p className='text-[#1406e0]'>{item.price.value} {item.price.currency}</p>
                        <DetailPopup title={cartItems?.findIndex(cartItem => cartItem.id == item._id)>-1?'Add More': 'Add To Cart'} 
                        onClose={() => { console.log('hello'); setOpen(false)}} 
                        onShow={() => {
                            // check if the item exist in the cart already
                            cartItems?.findIndex(_cartItem => _cartItem.id == item._id)>-1?
                            dispatch(increaseQty( item._id)):
                            dispatch(addToCart({id: item._id, name: item.name, price: item.price, qty: 1}))
                            setOpen(true);                        }
                        } 
                        setOpen={setOpen}
                        open={open}
                        />
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
  );
};

export default ItemCard;