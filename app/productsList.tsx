'use client'

import { useState } from "react";
import { Product } from "./product-data";
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function ProductsList({products, initialCartProducts}: {products: Product[], initialCartProducts: Product[]}) {

    const [ cartProducts, setCartProducts] = useState(initialCartProducts);

    async function addToCart (productId: string) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/2/cart`, {
            method: "POST",
            body: JSON.stringify({
                productId
            }), 
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const updatedProducts = await response.json();
        setCartProducts(updatedProducts);
    }
    function itemIsInCart(prodcutId: string) {
        return cartProducts.some(cp => cp.id === prodcutId);
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 p-12">
            {
                products.map(product => (
                    <Link key={product.id} href={`/products/${product.id}`}
                        className="bg-gray-50"
                    >
                        <div
                        className="flex flex-col items-center justify-center"
                        >
                        <Image 
                            src={'/' + product.imageUrl} 
                            alt="product page" 
                            width={150} height={150}
                            className="flex items-center mt-4 rounded-lg"
                        />
                        <h2>{product.name}</h2>
                        <h3 className="mb-4">${product.price}</h3>
                        {itemIsInCart(product.id) ? (
                        <button onClick={
                            (e) => {
                                e.preventDefault();
                                removeFromCart(product.id)
                            }
                        }
                        >Remove from Cart</button>
                        ) : (
                        <button onClick={
                            (e) => {
                                e.preventDefault();
                                addToCart(product.id)
                            }
                        }
                        >Add to Cart</button>)
                        }
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

