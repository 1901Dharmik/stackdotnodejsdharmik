import mongoose from "mongoose";

var institudeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["School", "College", "Playhouse", "Competitive Exam Center"],
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const institudeModel = mongoose.model("Institude", institudeSchema);
export default institudeModel;
