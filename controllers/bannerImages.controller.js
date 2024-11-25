import multer from "multer";
import { MongoClient, ObjectId } from "mongodb";
import bannerImages from "../models/bannerImages.model.js";
import path from 'path';

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/Banner_Images")
    },
    filename:(req,file,cb)=>{
        console.log(file)
    cb(null,file.originalname+'_'+Date.now()+path.extname(file.originalname))
    }
})

export const upload=multer({
    storage:storage,
    // fileFilter:(req,file,cb)=>{
    //     const fileTypes=/jepg|jpg|png|svg/;
    //     const mimetype=fileTypes.test(file.mimetype)
    //     const extname=fileTypes.test(path.extname(file.originalname).toLowerCase())
    //     if(mimetype && extname){
    //          return cb(null,true)
    //     }
    //     cb("Error:file upload failed select ")
    // }
})


//*************************8get for banner images***************************
export const images=async(req,res)=>{
 res.send("Banner Images")   
}
//*************************single images get*******************************
export const imageDetails=async(req,res)=>{
    res.send("Banner Images")   
   }
//***********************************post for banner images****************************
export const imageCreate=async(req,res)=>{
  try{
    
    const files=req.files
  if(files.length==0){
    res.status(400).send('No files uploaded')
  }
  const images=await bannerImages.insertMany(files.map((value)=>({
    filename:value.filename,
    location:value.path,
    size:value.size

})))
return res.status(201).json(images)
     

  }catch(err){
    res.status(500).json("Error uploading files")
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