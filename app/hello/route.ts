
export async function GET() {
    return new Response('Hello There All!!', {
        status: 201,
        statusText: 'Ok!!'
    });
}

export async function POST() {
    return new Response('Thank you for listening to me', {
        status: 200,
    })
}

