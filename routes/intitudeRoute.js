import express from "express";
import { intitudeController, getAllInstitudes, getSingleInstitude } from "../controllers/intitudeController.js";
const router = express.Router();

router.post("/",intitudeController);
router.get("/", getAllInstitudes);
router.get("/:id", getSingleInstitude);


export default router;