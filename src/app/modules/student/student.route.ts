import express from "express";
import { StudentControllers } from "./student.controller";

//will call controller function
const router = express.Router();

router.post("/create-student", StudentControllers.createStudent);
router.get("/", StudentControllers.getAllStudents);
router.get("/:studentId", StudentControllers.getSingleStudent);

export const StudentRoutes = router;
