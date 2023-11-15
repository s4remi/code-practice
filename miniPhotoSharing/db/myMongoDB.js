import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

function MyMongoDB() {
  const myDB = {};
  const uri = process.env.MONGO_URI;

  function connect() {
    const client = new MongoClient(uri);
    const db = client.db("photoSharing");
    return { client, db };
  }

  myDB.getPhotos = async function ({ query = {}, limit = 20 } = {}) {
    const { client, db } = connect();
    try {
      const photos = await db
        .collection("photos")
        .find(query)
        .limit(limit)
        .toArray();
      return photos;
    } finally {
      await client.close();
    }
  };
  return myDB;
}
const myDB = MyMongoDB();
export default myDB;
