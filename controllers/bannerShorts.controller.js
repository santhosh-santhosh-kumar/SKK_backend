import bannerShorts from "../models/bannerShorts.model.js";
import { MongoClient, ObjectId } from "mongodb";

let currentId=1
//*************************8get for banner Shorts***************************
export const shortsIndex=async (req, res) => {

    try{
        const getShorts=await bannerShorts.find()
        res.json(getShorts)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

//*************************single video get*******************************

export const shortsDetails=async (req,res)=>{
    try{
        const findShorts=await bannerShorts.findById(req.params.id)

        if(findShorts==null){
            return res.status(400).json({message:"cannot find video"})

        }else{
            res.json(findShorts)
        }

    }catch(err){
        res.status(500).json({err:err.message})
    }
}
//***********************************post for banner Shorts****************************
export const shortsCreate=async (req, res) => {
    req.body.id=currentId
   try{
    const newShorts=await bannerShorts.insertMany(req.body)
    currentId+=1
    return res.status(201).json(newShorts)

   }catch(err){
    return res.status(400).json({message:err.message})
   }
   
}

//********************************put for banner videos********************************
export const shortsUpdate=async (req, res) => {

    try{
        const updateShort=await bannerShorts.findByIdAndUpdate({_id:req.params.id},{ $set: req.body },{
            new:true
        })
res.status(200).json(updateShort)
    }catch(err){
        res.status(400).json({message:err.message})

    }

}

//************************delete for banner videos***************************
export const shortsDelete=async (req, res) => {
    try{
        await bannerShorts.deleteOne({ _id: new ObjectId(req.params.id) });
     res.json({message:"Delete successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }

}