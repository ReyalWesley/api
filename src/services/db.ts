import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import { ProjectSchema } from "../projects/project.collection";
// import { Project } from "../projects/project";

dotenv.config();

// database connection
const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const database = client.db("Portfolio");

export async function rundb() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("Portfolio").command({ ping: 1 });

    await database.command({ collMod: 'Projects', validator: ProjectSchema.schema })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  }
}