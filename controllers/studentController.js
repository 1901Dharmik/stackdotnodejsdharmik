import studentModel from "../models/studentModel.js";
const studentController = async (req, res) => {
  try {
    const newStudent = (await studentModel.create(req.body)).populate([
      "institude",
      "class",
      "subjects",
    ]);
    return res.status(200).json({
      message: "Student created successfully",
      student: newStudent,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllStudents = async (req, res) => {
  try {
    const studentList = await studentModel
      .find({})
      .populate(["institude", "class", "subjects"]);
    return res.status(200).json({
      message: "All students fetched successfully",
      studentList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getSingleStudent = async (req, res) => {
  try {
    const singleStudent = await studentModel
      .findById(req.params.id)
      .populate(["institude", "class", "subjects"]);
    if (!singleStudent)
      return res.status(404).json({ message: "No such student found" });
    return res.status(200).json({
      message: "Single Student fetched successfully",
      singleStudent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export { studentController, getAllStudents, getSingleStudent };
