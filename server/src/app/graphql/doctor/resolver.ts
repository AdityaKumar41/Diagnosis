import prismaClient from "../../client";

const query = {
  VerifyCheckup: async (parent: any, result: any, context: any) => {
    console.log(context);
    if (context.address === undefined) {
      throw new Error("Unauthorized");
    }
    try {
      const { address } = context;
      // Perform both queries in parallel to avoid sequential calls
      const [doctor, patient] = await Promise.all([
        prismaClient.doctor.findUnique({
          where: { address },
        }),
        prismaClient.patient.findUnique({
          where: { address },
        }),
      ]);

      if (!doctor && !patient) {
        throw new Error("User not found");
      }

      // Return doctor if found, otherwise return patient
      return doctor || patient;
    } catch (error: any) {
      throw new Error(error.message || "An unexpected error occurred");
    }
  },
};

const mutation = {
  createDoctor: async (
    parent: any,
    {
      name,
      registrationNumber,
      hash,
      email,
    }: {
      name: string;
      registrationNumber: string;
      hash: string;
      email: string;
    },
    context: any
  ) => {
    prismaClient.doctor.create({
      data: {
        name,
        email,
        registrationNumber,
        hash,
        address: context.address,
      },
    });
  },
};

export const resolver = { query, mutation };
