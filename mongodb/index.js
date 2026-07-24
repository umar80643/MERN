const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'test';

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await client.db(dbName).command({ ping: 1 });
    console.log(`Connected successfully to MongoDB at ${uri}, db: ${dbName}`);
  } catch (err) {
    console.error('Connection failed:', err);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

if (require.main === module) main();
