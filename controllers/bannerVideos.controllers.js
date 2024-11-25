import bannerVideos from "../models/bannerVideos.model.js";
import { MongoClient, ObjectId } from "mongodb";

let currentId=1
//*************************8get for banner videos***************************
export const videoIndex=async (req, res) => {

    try{
        const getVideos=await bannerVideos.find()
        res.json(getVideos)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

//*************************single video get*******************************

export const videoDetails=async (req,res)=>{
    try{
        const findVideo=await bannerVideos.findById(req.params.id)

        if(findVideo==null){
            return res.status(400).json({message:"cannot find video"})

        }else{
            res.json(findVideo)
        }

    }catch(err){

    }
}
//***********************************post for banner videos****************************
export const videoCreate=async (req, res) => {
    req.body.id=currentId
   try{
    const newVideos=await bannerVideos.insertMany(req.body)
    currentId+=1
    return res.status(201).json(newVideos)

   }catch(err){
    return res.status(400).json({message:err.message})
   }
   
}

//********************************put for banner videos********************************
export const videoUpdate=async (req, res) => {

    try{
        const updateVideo=await bannerVideos.findByIdAndUpdate({_id:req.params.id},{ $set: req.body },{
            new:true
        })
res.status(200).json(updateVideo)
    }catch(err){
        res.status(400).json({message:err.message})

    }

}

//************************delete for banner videos***************************
export const videoDelete=async (req, res) => {
    try{
        const deleteVideos = await bannerVideos.deleteOne({ _id: new ObjectId(req.params.id) });
     res.json({message:"Delete successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }

}