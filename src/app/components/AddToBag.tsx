"use client"

import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: {  // Define the image type to match the Sanity image structure
        _type: "image";
        asset: { _ref: string; _type: "reference" };
    };
    price_id: string;
}

export default function AddToBag({ currency, description, image, name, price, price_id }: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart();

    // Use the image prop passed to the component directly
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),  // Use urlFor to get the image URL
        price_id: price_id,
    };

    // Handle adding item to the cart and opening the cart
    const handleAddToCart = () => {
        addItem(product);
        handleCartClick();
    };

    return (
        <button
            onClick={handleAddToCart} 
            className="bg-purple-600 hover:bg-purple-700 text-gray-200 font-bold px-3 py-1 rounded-lg"
        >
            Add To Cart
        </button>
    );
}
