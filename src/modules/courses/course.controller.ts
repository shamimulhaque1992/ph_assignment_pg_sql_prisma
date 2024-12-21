import { Request, Response } from "express";
import { CourseService } from "./course.service";

const getCourseNameWithEnrolledStudent = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await CourseService.getCourseNameWithEnrolledStudent();

    res.send({
      success: true,
      message: "Course retried successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const createCourse = async (req: Request, res: Response) => {
  try {
    const result = await CourseService.createCourse(req.body);

    res.send({
      success: true,
      message: "Course created successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deleteCourseWithoutStudents = async (req: Request, res: Response) => {
  try {
    const result = await CourseService.deleteCourseWithoutStudents();

    res.send({
      success: true,
      message: "Course deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const CourseController = {
  createCourse,
  deleteCourseWithoutStudents,
  getCourseNameWithEnrolledStudent,
};
