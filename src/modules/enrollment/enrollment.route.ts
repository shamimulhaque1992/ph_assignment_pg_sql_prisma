import express from "express";
import { EnrollmentController } from "./enrollment.controller";
const router = express.Router();

router.post("/create-enrollment", EnrollmentController.createEnrollment);

export const EnrollmentRoutes = router;
