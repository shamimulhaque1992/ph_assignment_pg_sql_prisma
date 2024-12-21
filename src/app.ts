import express, { Application } from "express";
import cors from "cors";
import { StudentsRoutes } from "./modules/students/students.route";
import { CourseRoutes } from "./modules/courses/course.route";
import { EnrollmentRoutes } from "./modules/enrollment/enrollment.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/student", StudentsRoutes);
app.use("/api/v1/course", CourseRoutes);
app.use("/api/v1/enrollment", EnrollmentRoutes);

export default app;
