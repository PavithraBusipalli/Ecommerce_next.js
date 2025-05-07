import { Product } from "./product-data";
import Image from 'next/image';
import Link from 'next/link';


export default function ProductsList({products}: {products: Product[]}) {
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
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

