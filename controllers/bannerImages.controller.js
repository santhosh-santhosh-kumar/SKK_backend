  import { MongoClient, ObjectId } from "mongodb";
import bannerImages from "../models/bannerImages.model.js";
import fs from 'fs'
import connectDB from "../database/db.js";




//*************************8get for banner images***************************
export const images=async(req,res)=>{
 res.send("Banner Images")   
}
//*************************single images get*******************************
export const imageDetails=async(req,res)=>{
    res.send("Banner Images")   
   }
//***********************************post for banner images****************************
export const imageCreate=async(req,res,next)=>{

    const files=req.files
  if(files.length==0){
    res.status(400).send('No files uploaded')
    return next('No files uploaded')
  }


  try {
    // Save file details to MongoDB
    const files = req.files.map(file => ({
      fileName: file.originalname,
      contentType: file.mimetype,
      path: file.path
    }));

    await bannerImages.insertMany(files);

    res.status(200).send({ message: "Files uploaded successfully", files });
} catch (dbErr) {
    console.error("Database error:", dbErr);
    res.status(500).send({ error: "Failed to save file details" });
}
  }






//********************************put for banner images********************************
export const imageUpdate=async(req,res)=>{
    res.send("Banner Images")   
   }
//************************delete for banner images***************************
export const imageDelete=async(req,res)=>{
    res.send("Banner Images")   
   }