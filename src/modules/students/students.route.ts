import express from "express";
import { StudentsController } from "./students.controller";

const router = express.Router();
router.get("/", StudentsController.getAllStudents);
router.get(
  "/get-students-by-course",
  StudentsController.getStudentsByCourseName
);
router.get("/average-age", StudentsController.getAverageAge);

router.get(
  "/get-students-by-pagination",
  StudentsController.getStudentsByPagination
);
router.get("/students-by-email", StudentsController.getStudentsByEmailDomain);

router.patch("/update-student-status", StudentsController.updateStudentStatus);

router.get("/:id", StudentsController.getSingleStudent);
router.post("/create-student", StudentsController.createStudent);
export const StudentsRoutes = router;
