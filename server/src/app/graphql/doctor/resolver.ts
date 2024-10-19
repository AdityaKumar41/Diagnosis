import prismaClient from "../../client";

const query = {
  VerifyCheckup: async (parent: any, { address }: { address: string }) => {
    try {
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

export const resolver = { query };
