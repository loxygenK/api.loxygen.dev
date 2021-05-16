import { ApolloServer } from "apollo-server";
import resolvers from "@/graphql/resolver";

import fs from "fs";

const server = new ApolloServer({
  typeDefs: fs.readFileSync("src/graphql/typedef/schema.graphql").toString(),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is ready: ${url}`);
});
