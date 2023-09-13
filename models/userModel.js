import mongoose  from "mongoose"

const userSchema=new mongoose.Schema({
    name:{type: String,required:true},
    email:{type:String,unique: true,required:true},
    password:{type:String,required:true},
    about:{type: String},
    profileURL:{type: String},
},{timestamps:true})
  export const useModel = mongoose.models.useModel || mongoose.model("useModel", userSchema);


