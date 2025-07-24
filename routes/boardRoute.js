import express from "express";
import {boardController, getAllBoards, getSingleBoardList} from "../controllers/boardController.js";
const router = express.Router();

router.post("/",boardController);
router.get("/", getAllBoards);
router.get("/:id", getSingleBoardList);


export default router;