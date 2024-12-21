import { Request, Response } from "express";
import { StudentsService } from "./students.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    const result = await StudentsService.createStudent(req.body);
    res.send({
      success: true,
      message: "Student created successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getAllStudents = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    const result = await StudentsService.getAllStudents();
    res.send({
      success: true,
      message: "Student retrived successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    const studentId = parseInt(req.params.id);

    if (isNaN(studentId)) {
      res.send({
        success: false,
        message: "Invalid student id",
      });
    }
    const result = await StudentsService.getSingleStudent(studentId);
    res.send({
      success: true,
      message: "Student retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getStudentsByCourseName = async (req: Request, res: Response) => {
  try {
    console.log(req.query.courseName);
    const courseName = req.query.courseName as string;
    if (!courseName) {
      res.send({
        success: false,
        message: "Please provide course name",
      });
    }

    const result = await StudentsService.getStudentsByCourseName(courseName);
    res.send({
      success: true,
      message: "Students retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getStudentsByPagination = async (req: Request, res: Response) => {
  try {
    const options = req.query;

    const result = await StudentsService.getStudentsByPagination(options);
    res.send({
      success: true,
      message: "Students retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getAverageAge = async (req: Request, res: Response) => {
  try {
    const result = await StudentsService.calculateAverageAge();
    res.send({
      success: true,
      message: "Average age calculated successfully!",
      data: { average_age: result },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to calculate average age",
    });
  }
};
const getStudentsByEmailDomain = async (req: Request, res: Response) => {
  try {
    const result = await StudentsService.getStudentsByEmailDomain(
      "example.com"
    );
    res.send({
      success: true,
      message: "Students retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to retrieve students",
    });
  }
};
const updateStudentStatus = async (req: Request, res: Response) => {
  try {
    const result = await StudentsService.updateStudentStatus();
    res.send({
      success: true,
      message: "Students status changed successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const StudentsController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  getStudentsByCourseName,
  updateStudentStatus,
  getStudentsByPagination,
  getAverageAge,
  getStudentsByEmailDomain,
};
