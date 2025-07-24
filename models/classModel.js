import mongoose from "mongoose";
var classSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    level:{
        type:Number,
        required:true,
    },
    intitudeType:{
        type:String,
        enum:["School", "College", "Playhouse", "Competitive Exam Center"],
        required:true,
    },
    board:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Board",
        required: true,
    }
},{
    timestamps: true
});

const classModel = mongoose.model("Class", classSchema);
export default classModel;