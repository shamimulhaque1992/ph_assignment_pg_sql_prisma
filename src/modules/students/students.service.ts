import { PrismaClient, students } from "@prisma/client";
const prisma = new PrismaClient();
const createStudent = async (data: students): Promise<students> => {
  // console.log(data);
  const result = await prisma.students.create({
    data: data,
  });
  return result;
};
const getAllStudents = async () => {
  // console.log(data);
  const result = await prisma.students.findMany();
  return result;
};
const getSingleStudent = async (studentId: number) => {
  // console.log(data);
  const result = await prisma.students.findUnique({
    where: {
      student_id: studentId,
    },
  });
  return result;
};
const getStudentsByCourseName = async (courseName: string) => {
  const result = await prisma.students.findMany({
    where: {
      enrollment: {
        some: {
          course: {
            course_name: courseName,
          },
        },
      },
    },
    select: {
      student_name: true,
    },
  });

  return result;
};
const getStudentsByPagination = async (options: any) => {
  const { page, limit } = options;

  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  const take = parseInt(limit);
  const result = await prisma.students.findMany({
    select: {
      student_name: true,
    },
    skip: skip,
    take: take,
  });

  return result;
};
const calculateAverageAge = async (): Promise<number> => {
  const students = await prisma.students.findMany({
    select: {
      age: true,
    },
  });

  const numericAges = students
    .map((student) => parseInt(student.age, 10))
    .filter((age) => !isNaN(age)); // Filter out invalid ages

  const averageAge =
    numericAges.reduce((sum, age) => sum + age, 0) / numericAges.length;

  return averageAge || 0; // Return 0 if no valid ages exist
};
const getStudentsByEmailDomain = async (domain: string): Promise<string[]> => {
  const students = await prisma.students.findMany({
    where: {
      email: {
        contains: domain,
      },
    },
    select: {
      student_name: true,
    },
  });

  return students.map((student) => student.student_name);
};
const updateStudentStatus = async () => {
  const topStudent = await prisma.students.findFirst({
    orderBy: [
      {
        frontend_mark: "desc",
      },
      {
        backend_mark: "desc",
      },
    ],
    select: {
      student_id: true,
    },
  });

  if (topStudent) {
    const updateStudent = await prisma.students.update({
      where: {
        student_id: topStudent.student_id,
      },
      data: {
        status: "Awarded",
      },
    });

    return updateStudent;
  }
  throw new Error("No student found");
};

export const StudentsService = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  getStudentsByCourseName,
  updateStudentStatus,
  getStudentsByPagination,
  calculateAverageAge,
  getStudentsByEmailDomain,
};
