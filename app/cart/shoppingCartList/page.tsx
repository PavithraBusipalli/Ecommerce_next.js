'use client';

import { useState } from "react";
import Link from 'next/link';
import { Product } from "@/app/product-data";

export default function ShoppingCartList({ initialCartProducts}: { initialCartProducts: Product[]}) {
    const [cartProducts, setCartProducts] = useState(initialCartProducts);
    async function removeFromCart(productId: string) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/2/cart`, {            method: 'DELETE',
            body: JSON.stringify({
                productId 
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const updatedProducts = await response.json();
        setCartProducts(updatedProducts);
    }

    return (
        <>
            <h1 className="text-2xl font-bold m-4 underline decoration-wavy decoration-blue-500 text-pink-600">Shopping Cart</h1>
            {
                Array.isArray(cartProducts) && cartProducts.length > 0 ? (
                    cartProducts.map(product => (                    
                        <div 
                            className="bg-gray-100 m-10 p-4 rounded hover:shadow-lg border border-gray-200"
                            key={product!.id} 
                        >
                        <Link 
                        href={`/products/${product?.id}`}
                        >
                            <h3>{product!.name}</h3>
                            <p className="text-gray-500">${product!.price}</p>
                            <button
                                className="bg-blue-300 p-2 rounded hover:cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeFromCart(product.id);
                                }}
                            >
                                Remove from cart
                            </button>
                        </Link>
                        </div>
                    ))
                ) : (
                    <p className="m-4 text-gray-500">Your cart is empty.</p>
                )
            }
        </>
    )
}