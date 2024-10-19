import { GraphQLClient } from "graphql-request";

const accounts = await window.ethereum.request({
  method: "eth_accounts",
});
const graphqlClient = new GraphQLClient("http://localhost:4000/graphql", {
  headers: () => {
    return {
      authorization: `Bearer ${accounts[0]}`,
    };
  },
});

export default graphqlClient;
