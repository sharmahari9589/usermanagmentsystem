import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    gender:String,
    status:String
})


export const userModel = mongoose.model('user',userSchema);