import { enrollment, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const createEnrollment = async (data: enrollment): Promise<enrollment> => {
  const result = await prisma.enrollment.create({
    data,
  });

  return result;
};

export const EnrollmentService = {
  createEnrollment,
};
