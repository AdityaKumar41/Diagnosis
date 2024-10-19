import { graphql } from "../../gql";
export const VerifyCheck = graphql(`
  query VerifyCheckup($address: String!) {
    VerifyCheckup(address: $address) {
      id
    }
  }
`);
