import subjectModel from "../models/subjectModel";
const getAllSubjects = async (req, res) => {
  try {
    const { institudeType, classId } = req.query;
    const filter = {};
    if (institudeType) {
      filter.institudeType = institudeType;
    }
    if (classId) {
      filter.class = classId;
    }
    const newSubject = await subjectModel.find(filter).populate("classes");
    return res.status(200).json({
      message: "Subject created successfully",
      subject: newSubject,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const subjectController = async (req, res) => {
  try {
    const newSubject = await subjectModel.create(req.body).populate("classes");
    return res.status(200).json({
      message: "Subject created successfully",
      subject: newSubject,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
const getInstituteSubjects = async (req, res) => {
    try {
        const { type } = req.params
        const subjects = await subjectModel.find({ institudeType: type }).populate('classes')
        return res.status(200).json({ message: "Subjects fetched successfully", subjects })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
        
    }
}
export {
  subjectController,
  getAllSubjects,
  getInstituteSubjects
};