import express from 'express';
import { studentController, getAllStudents, getSingleStudent } from "../controllers/studentController.js";
const router = express.Router();
router.post('/', studentController);
router.get('/', getAllStudents);
router.get('/:id', getSingleStudent);
export default router;