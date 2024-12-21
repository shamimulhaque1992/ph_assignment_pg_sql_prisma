import express from "express";
import { CourseController } from "./course.controller";
const router = express.Router();

router.get("/course-name-with-enrolled-student", CourseController.getCourseNameWithEnrolledStudent);
router.post("/create-course", CourseController.createCourse);
router.delete(
  "/delete-course-without-students",
  CourseController.deleteCourseWithoutStudents
);
export const CourseRoutes = router;
