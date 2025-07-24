import mongoose from "mongoose";
var subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    description:{
        type:String,
        required:false
    },
    instituteType: {
        type: String,
        enum: ["School", "College", "Playhouse", "Competitive Exam Center"],
        required: true,
    },
    classes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    }]
},{
    timestamps: true
});
const subjectModel = mongoose.model("Subject", subjectSchema);
export default subjectModel;