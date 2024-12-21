import { courses, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const getCourseNameWithEnrolledStudent = async () => {
  const coursesWithEnrollment = await prisma.courses.findMany({
    select: {
      course_name: true,
      _count: {
        select: {
          enrollment: true,
        },
      },
    },
  });

  const result = coursesWithEnrollment.map((course) => ({
    course_name: course.course_name,
    enrolled_students: course._count.enrollment,
  }));

  return result;
};
const createCourse = async (data: courses): Promise<courses> => {
  const result = await prisma.courses.create({
    data,
  });

  return result;
};
const deleteCourseWithoutStudents = async () => {
  const result = await prisma.courses.deleteMany({
    where: {
      enrollment: {
        none: {},
      },
    },
  });

  return result;
};

export const CourseService = {
  createCourse,
  deleteCourseWithoutStudents,
  getCourseNameWithEnrolledStudent,
};
