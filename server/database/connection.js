import mongoose from "mongoose";

 const connectDb = async()=>{
    try {
        //mongodb connection string
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            
        })
       console.log("mongodb connected");
    } catch (error) {
        console.log(error);
        process.exit();
    }
 }

export default connectDb;