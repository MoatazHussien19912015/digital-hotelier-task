import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const sumItems = (cartItems: CartItem[]) => {
  
  return {
      itemCount: cartItems.reduce((total: number, product: CartItem) => total + product.qty, 0) ,
      total: cartItems.reduce((total: number, product: CartItem) => total + (product.qty * parseFloat(product.price.value)), 0)
  }
};




