import mongoose from 'mongoose';

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    institude:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Institude",
        required: true,
    },
    class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    },
    subjects:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    }],
    password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
});
const studentModel = mongoose.model("Student", studentSchema);
export default studentModel;