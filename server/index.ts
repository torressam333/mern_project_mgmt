import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import cors from "cors";
import seedClients from "./seeders/clientSeeder";

//For env file parsing
dotenv.config();

// Project imports
import schema from "./schema/schema";
import connectDB from "./config/mongodb";

const PORT = process.env.PORT || 6002;

const app: Application = express();

app.use(cors());

// Connect to db
const start = async () => {
  // Server not in cache? Spin up fresh server/db
  try {
    //connect to db
    await connectDB();

    // Asynchronously seed 10 clients for dev
    if (process.env.NODE_ENV === "development") await seedClients();

    // Start gql server
    app.use(
      "graphql",
      graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === "development" && true
      })
    );

    app.listen(PORT, () =>
      console.log(
        `Running a GraphQL API server at http://localhost:${PORT}/graphql`
      )
    );
  } catch (error) {
    console.error("Error in index file", error);
  }
};

// Bootstrap app and server
start();
