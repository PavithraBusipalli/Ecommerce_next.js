'use client';

import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";



export default function CartPage() {
    const [cartIds] = useState(['123', '345']);
    const cartProducts = cartIds.map(id => products.find(p => p.id === id))
    return (
        <>
            <h1 className="text-2xl font-bold m-4 underline decoration-wavy decoration-blue-500 text-pink-600">Shopping Cart</h1>
            {
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
                    </Link>
                    </div>
                    )
                )
            }
        </>
    )
} 