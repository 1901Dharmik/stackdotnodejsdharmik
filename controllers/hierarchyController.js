import institudeModel from "../models/institudeModel.js";
import boardModel from "../models/boardModel.js";
import classModel from "../models/classModel.js";
import studentModel from "../models/studentModel.js";
import subjectModel from "../models/subjectModel.js";

const hierarchyController = async( req,res,next) => { 
    try {
        const { institudeType } = req.params;

        const result = {
            institudeType,
            classes: [],
            subjects: [],
        }

        const classes = await classModel.find({ instituteType }).populate('board');
        result.classes = classes;
        const subjects = await subjectModel.find({ instituteType }).populate('board');
        result.subjects = subjects;

        if(institudeType === "school" || "School"){
            const boards = await boardModel.find();
            result.boards = boards;
            res.json({
                message: "Hierarchy data fetched successfully",
                data: result
            });
        }else{
            res.json({
                message: "Invalid Institute Type"
            })
        }
    } catch (error) {
        next(error);
        console.error("Error in hierarchyController:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}

const getCompleteHierarchy = async (req, res) => {
    try {
        const institudes = await institudeModel.find();
        const boards = await boardModel.find();
        const classes = await classModel.find().populate('board');
        const students = await studentModel.find().populate(['class', 'board']);
        const subjects = await subjectModel.find().populate('board');

        const hierarchy = {
           playhouse:{
            institude: institudes.filter(i => i.type === 'playhouse'),
            classes: classes.filter(c => c.intitudeType === 'Playhouse'),
            subjects: subjects.filter(s => s.instituteType === 'Playhouse')

           },
            school:{
            institude: institudes.filter(i => i.type === 'school'),
            classes: classes.filter(c => c.intitudeType === 'School'),
            subjects: subjects.filter(s => s.instituteType === 'School')
           },
            college:{
            institude: institudes.filter(i => i.type === 'college'),
            classes: classes.filter(c => c.intitudeType === 'College'),
            subjects: subjects.filter(s => s.instituteType === 'College')
           },
            competitiveExamCenter:{
            institude: institudes.filter(i => i.type === 'competitive exam center'),
            classes: classes.filter(c => c.intitudeType === 'Competitive Exam Center'),
            subjects: subjects.filter(s => s.instituteType === 'Competitive Exam Center')
           }
        };
        res.json({
            message: "Complete hierarchy data fetched successfully",
            data: hierarchy
        });
    } catch (error) {
        next(error);
        console.error("Error in getCompleteHierarchy:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}

export{
    hierarchyController,
    getCompleteHierarchy
}