import bannerVideos from "../models/bannerVideos.model.js";

//get for banner videos
export const videoIndex=(req, res) => {
    res.send(req.body);
}

//post for banner videos
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
//put for banner videos
export const videoUpdate=(req, res) => {
    res.send('Banner route works! PUT');
}

//delete for banner videos
export const videoDelete=(req, res) => {
    res.send('Banner route works! DELETE');
}