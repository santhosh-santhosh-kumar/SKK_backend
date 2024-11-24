import bannerVideos from "../models/bannerVideos.model.js";
import { MongoClient, ObjectId } from "mongodb";

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

    const newBannerVideos=new bannerVideos({
        title:req.body.title,
        url:req.body.url,
    })

   
   try{
    const newVideos=await newBannerVideos.save()
    return res.status(201).json(newVideos)

   }catch(err){
    return res.status(400).json({message:err.message})
   }
}

//********************************put for banner videos********************************
export const videoUpdate=async (req, res) => {

    try{
        const updateVideo=await bannerVideos.findByIdAndUpdate({_id:req.params.id},{
            title:req.body.title,
            url:req.body.url
        },{
            new:true
        })
res.status(200).json(updateVideo)
    }catch(err){
        res.status(400).jason({message:err.message})

    }

}

//************************8delete for banner videos***************************888
export const videoDelete=async (req, res) => {
    try{
        const deleteVideos = await bannerVideos.deleteOne({ _id: new ObjectId(req.params.id) });
     res.json({message:"Delete successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }

}