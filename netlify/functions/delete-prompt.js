const { MongoClient, ObjectId } = require('mongodb');

exports.handler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
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

        const { id } = JSON.parse(event.body);
        
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: true,
                deleted: result.deletedCount
            })
        };
    } catch (error) {
        console.error('Error deleting prompt:', error);
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
