import express from 'express';

const router = express.Router();
import { classController, getAllClasses, getSingleClass, getClassByInstituteType } from "../controllers/boardController.js";
router.post('/institude', classController);
router.get('/institude', getAllClasses);
router.get('/institude/:id', getClassByInstituteType);

export default router;