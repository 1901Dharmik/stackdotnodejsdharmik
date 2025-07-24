import express from 'express';
import { hierarchyController, getCompleteHierarchy } from "../controllers/hierarchyController.js";
const router = express.Router();
router.post('/', hierarchyController);
router.get('/', getCompleteHierarchy);
export default router;