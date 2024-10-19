import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { client } from "./graphql/doctor";
import BodyParser from "body-parser";

export async function CreateServer() {
  const app = express();
  app.use(BodyParser.json());
  app.use(cors());

  const graphqlServer = new ApolloServer({
    typeDefs: `
  ${client.type}

  type Query {
  ${client.queries}
  }

  type Mutation {
  ${client.mutation}
  }
    `,
    resolvers: {
      Query: {
        ...client.resolver.query,
      },
      Mutation: {
        ...client.resolver.mutation,
      },
    },
  });

  await graphqlServer.start();

  app.use(
    "/graphql",
    expressMiddleware(graphqlServer, {
      context: async ({ req }) => {
        return {
          address: req.headers.authorization?.split(" ")[1],
        };
      },
    })
  );

  return app;
}
