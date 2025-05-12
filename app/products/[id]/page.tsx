import NotFound from "@/app/not-found";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function ProductDetails({ params }: { params: { id: string } }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${params.id}`);
    const product = await response.json();
    if (!product) {
        return <NotFound />
    }
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-20">
            <div className="w-full md:w-1/2">
            <img src={`/${product.imageUrl}`} alt='Product Image' className="w-2/3 h-auto rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
            <h3 className="text-2xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <Link href='/products' className="text-blue-500 hover:underline">Go Back</Link>
            </div>
        </div>
    )
}