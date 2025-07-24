import Instutude from "../models/institudeModel.js";

const intitudeController = async (req, res) => {
  try {
    const newInstutude = await Instutude.create(req.body);
    return res.status(200).json({
      message: "Instutude created successfully",
      institude: newInstutude,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllInstitudes = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { type } : {};
    const institudeList = await Instutude.find(filter).populate("board");

    return res.status(200).json({
      message: "All Institudes fetched successfully",
      institudeList,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleInstitude = async (req, res) => {
  try {
    const institudeId = req.params.id;
    const singleInstutude = await Instutude.findById(institudeId);
    if (!singleInstutude)
      return res.status(404).json({ message: "No institude found" });
    return res.status(200).json({
      message: "Single institude fetched successfully",
      singleInstutude,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};



export { intitudeController, getAllInstitudes, getSingleInstitude };
