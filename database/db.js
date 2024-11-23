import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
console.log(typeof(process.env.MONGO_URI))
const connectDB=async ()=>{
   try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongo db connected..........");
    
   }catch(err){
    console.error(err.message)
    process.exit(1)
   }
}

export default connectDB