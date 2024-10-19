import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../api/Client";
import { VerifyCheck } from "../graphql/query/client";

export const VerifyCheckup = (address: string) => {
  const query = useQuery({
    queryKey: ["VerifyCheckup"],
    queryFn: () => graphqlClient.request(VerifyCheck, { address }),
  });
  return query;
};
