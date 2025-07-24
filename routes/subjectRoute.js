import express from 'express';
import {
  subjectController,
  getAllSubjects,
  getInstituteSubjects
} from "../controllers/subjectController.js";
const router = express.Router();

router.post('/', subjectController);
router.get('/', getAllSubjects);
router.get('/:id', getInstituteSubjects);
export default router;