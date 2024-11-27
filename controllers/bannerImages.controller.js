  import { MongoClient, ObjectId } from "mongodb";
import bannerImages from "../models/bannerImages.model.js";
import fs from 'fs'
import connectDB from "../database/db.js";




//*************************get for banner images***************************
export const images=async(req,res)=>{
  try{
    const images=await bannerImages.find()
    res.status(200).json(images)
  }catch(err){
    res.status(500).json({err:err.message})

  }
}
//*************************single images get*******************************
export const imageDetails=async(req,res)=>{
  try{
    const detail=await bannerImages.findById(req.params.id)
    res.status(200).json(detail)

  }catch(err){
    res.status(500).jason({err:err.message})
  }
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
      fileName: `https://skk-backend.onrender.com/uploads/Banner_Images/${file.filename}`,
      contentType: file.mimetype,
      path: file.path,
      url:`/uploads/Banner_Images/${file.filename}`
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
  try{
   await bannerImages.deleteOne({_id:new ObjectId(req.params.id)})
   res.status(200).send("Delete successfully")
  }catch(error){
    res.status(500).json({error:error.message})
  }
    
   }