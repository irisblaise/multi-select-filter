import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const filePath = path.join(__dirname, 'items.json');
const rawData = fs.readFileSync(filePath, 'utf-8');
const items: string[] = JSON.parse(rawData).data;

const typeDefs =`
  type Query {
    items: [String!]!
  }
`;

const resolvers = {
  Query: {
    items: () => items,
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('🚀 GraphQL server running at http://localhost:4000/graphql');
});