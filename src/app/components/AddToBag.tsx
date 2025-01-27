"use client"

import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

export interface ProuctCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    price_id: string;
}

export default function AddToBag({currency, description, image, name, price, price_id}:ProuctCart){
    const {addItem, handleCartClick} = useShoppingCart();
      
    const product = {
    name: name,
    description: description, 
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
    };

    return  <button onClick={()=> {
        addItem(product), handleCartClick();
    }} 
    className="bg-purple-600 hover:bg-purple-700 text-gray-200 font-bold px-3 py-1 rounded-lg">
    Add To Cart
  </button>

   
}