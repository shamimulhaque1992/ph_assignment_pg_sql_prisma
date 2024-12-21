import { Request, Response } from "express";
import { EnrollmentService } from "./enrollment.service";

const createEnrollment = async (req: Request, res: Response) => {
  try {
    const result = await EnrollmentService.createEnrollment(req.body);

    res.send({
      success: true,
      message: "Enrollment created successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const EnrollmentController = {
  createEnrollment,
};


