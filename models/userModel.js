import mongoose  from "mongoose"

const userSchema=new mongoose.Schema({
    name:{type: String,required:true},
    email:{type:String,unique: true,required:true},
    password:{type:String,required:true},
    about:{type: String},
    profileURL:{type: String,default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7WjONaOfilXR3bebrfe_zcjl58ZdAzJHYw&usqp=CAU'},
},{timestamps:true})
  export const useModel = mongoose.models.useModel || mongoose.model("useModel", userSchema);


