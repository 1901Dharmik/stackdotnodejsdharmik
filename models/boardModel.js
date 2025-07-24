const boardSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true},
    description: {
        type:String,
        required:false},
})

const boardModel = mongoose.model("Board", boardSchema);
export default boardModel;