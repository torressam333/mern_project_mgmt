import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';

//For env File
dotenv.config();

// Project imports
import schema from './schema/schema';
import connectDB from './config/mongodb';

const PORT = process.env.PORT || 5000;

const app: Application = express();

// Connect to db
const start = async () => {
  try {
    //connect to db
    await connectDB();

    // Start gql server
    app.use(
      '/v1/graphql',
      graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development' && true,
      })
    );

    app.listen(PORT);

    console.log(
      `Running a GraphQL API server at http://localhost:${PORT}/v1/graphql`
    );
  } catch (error) {
    console.error('Error in index file', error);
  }
};

start();
