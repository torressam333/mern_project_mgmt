import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';

// Project imports
import schema from './schema/schema';

//For env File
dotenv.config();

const PORT = process.env.PORT || 5000;

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app: Application = express();
app.use(
  '/v1/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === 'development' && true,
  })
);

app.listen(PORT);

console.log(
  `Running a GraphQL API server at http://localhost:${PORT}/v1/graphql`
);
