const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
    // Autoriser GET
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('studio_djaidani_1943');
        const collection = db.collection('prompts');

        const prompts = await collection.find({}).sort({ createdAt: -1 }).toArray();

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: true,
                prompts: prompts
            })
        };
    } catch (error) {
        console.error('Error fetching prompts:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: false,
                error: error.message
            })
        };
    } finally {
        await client.close();
    }
};
