import { GraphQLClient } from "graphql-request";

const graphqlClient = new GraphQLClient("http://localhost:4000/graphql");

export default graphqlClient;
