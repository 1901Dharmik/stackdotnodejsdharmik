import classModel from "../models/classModel.js";
const classController = async (req, res) => {
  try {
    const newClass = (await classModel.create(req.body)).populate('board');
    return res.status(200).json({
      message: "Class created successfully",
      class: newClass,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllClasses = async (req, res) => {
  
  try {
      const { institudeType , board} = req.query;
    const filter = {};
    if (institudeType) {
      filter.intitudeType = institudeType;
    }
    if (board) {
      filter.board = board;
    }
    const classList = await classModel.find(filter).populate("board");
    return res.status(200).json({
      message: "All classes fetched successfully",
      classList,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getSingleClass = async (req, res) => {
  try {
    const classId = req.params.id;
    const singleClass = await classModel.findById(classId);
    if (!singleClass)
      return res.status(404).json({ message: "No class found" });
    return res.status(200).json({
      message: "Single class fetched successfully",
      singleClass,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getClassByInstituteType = async (req, res) => {
  try {
    const { type } = req.params;
    const classes = await classModel.find({ institudeType: type }).populate('board');
    return res.status(200).json({ message: "Classes fetched successfully", classes });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export { classController, getAllClasses, getSingleClass, getClassByInstituteType };