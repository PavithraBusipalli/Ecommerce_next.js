import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null = null ;
let cachedDb: Db | null = null;

export async function connectToDB() {
    if(cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.hxdfq.mongodb.net/`

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();
    cachedClient = client;
    cachedDb = client.db('eCommerce-Nextjs');
    return { client, db: client.db('eCommerce-Nextjs') }
}

