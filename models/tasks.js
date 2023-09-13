import mongoose  from "mongoose"

const taskSchema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    addedData:{type:Date,default:Date.now()},
    status:{type:String,enum:['pending','completed'],default:'pending'},
    userId:{type:mongoose.Schema.ObjectId,require:true}
})
  export const taskModel = mongoose.models.taskModel || mongoose.model("taskModel", taskSchema);


