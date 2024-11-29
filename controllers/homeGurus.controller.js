import connectDB from "../database/db.js";
import gurus  from "../models/homeGurus.model.js";

//get methodev-all
export const getGurus=async(req,res)=>{
    try{
      const gurusData=await gurus.find()
      res.status(200).json(gurusData)
    }catch(err){
        res.status(200).json({err:err.message})
    }
    res.json(req.body)
}

//get methode - single
export const getSingleGuru=async(req,res)=>{
    res.json(req.body)
}

//post methode 

export const postGurus=async(req,res)=>{

    const file=req.file
    try{
        // const files={
            
        //    }
        
           const newFile = new  gurus({
            name:req.body.name,
            about:req.body.about,
            url: `https://skk-backend.onrender.com/homeGurusImages/${file.filename}`
           });
            await newFile.save();
            res.status(200).json({data: newFile});
    }catch(err){
        res.staus(500).json({err:err.message})
    }
   
}


//update methode

export const updateGuru=async(req,res)=>{
    res.json(req.body)
}

//delete methode

export const deleteGuru=async(req,res)=>{
    res.send("Deleted")
}

