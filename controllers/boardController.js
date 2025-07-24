import Board from "../models/institudeModel.js";

const boardController = async (req, res) => {
  try {
    const newBoard = await Board.create(req.body);
    return res.status(200).json({
      message: "Instutude created successfully",
      board: newBoard,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllBoards = async (req, res) => {
  try {
    const boardList = await Board.find({});
    return res.status(200).json({
      message: "All Institudes fetched successfully",
      boardList,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleBoardList = async (req, res) => {
  try {
    const boardListId = req.params.id;
    const singleBoard = await Board.findById(boardListId);
    if (!singleBoard)
      return res.status(404).json({ message: "No institude found" });
    return res.status(200).json({
      message: "Single institude fetched successfully",
      singleBoard,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};



export { boardController, getAllBoards, getSingleBoardList };
