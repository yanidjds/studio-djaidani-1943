// update-prompt.js - Netlify Function
const { MongoClient, ObjectId } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://djaidaniadam02_db_user:0WZcqW2iFYDyiDtb@cluster0.vlltcxf.mongodb.net/?retryWrites=true&w=majority&appName=cluster0';
const DB_NAME = 'studio_djaidani_1943';
const COLLECTION_NAME = 'prompts';

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };
    
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }
    
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
    
    let client;
    
    try {
        const data = JSON.parse(event.body);
        
        if (!data.promptId || !data.updates) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'promptId et updates requis' })
            };
        }
        
        client = await MongoClient.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);
        
        // Mettre à jour
        const result = await collection.updateOne(
            { _id: new ObjectId(data.promptId) },
            { $set: { ...data.updates, updatedAt: new Date().toISOString() } }
        );
        
        if (result.matchedCount === 0) {
            return {
                statusCode: 404,
                headers,
                body: JSON.stringify({ error: 'Prompt non trouvé' })
            };
        }
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true })
        };
        
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: error.message
            })
        };
    } finally {
        if (client) {
            await client.close();
        }
    }
};