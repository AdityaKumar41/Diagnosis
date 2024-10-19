import { useMutation, useQuery } from "@tanstack/react-query";
import graphqlClient from "../api/Client";
import { VerifyCheck } from "../graphql/query/client";
import { VerifyCheckupQuery } from "../gql/graphql";

export const VerifyCheckup = () => {
  const query = useQuery({
    queryKey: ["VerifyCheckup"],
    queryFn: () => graphqlClient.request<VerifyCheckupQuery>(VerifyCheck),
  });
  return query;
};

// export const RegisterDoctor = () => {
//   const mutation = useMutation({
//     mutationKey: ["RegisterDoctor"],
//     mutationFn: (data: Inputs) =>
//       graphqlClient.request<RegisterDoctorMutation>(RegisterDoctor, data),
//   });
//   return mutation;
// };
