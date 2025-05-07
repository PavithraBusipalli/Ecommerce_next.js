import { products } from "@/app/product-data";
import { NextRequest } from "next/server";

type Params = {
    id: string;
}
export async function GET(request: NextRequest, { params } : { params: Params}) {
    const productId = params.id;
    const product = products.find((item) => item.id === productId);
    if(!product) {
        return new Response('Product Not Found!', {
            status: 404,
            statusText: 'Not'
        })
    }
    return new Response(JSON.stringify(product), {
        status: 200,
        statusText: 'OKK',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}