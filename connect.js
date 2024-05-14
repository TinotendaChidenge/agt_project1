// Install MongoDB driver
//npm install mongodb

// Connect to MongoDB
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:3000'; // MongoDB server address
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();

// Perform CRUD operations
// (Insert, Find, Update, Delete)

// Close the connection
async function closeConnection() {
    try {
        await client.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error closing connection:', error);
    }
}

closeConnection();
