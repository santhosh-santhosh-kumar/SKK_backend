import { model, Schema } from "mongoose";

const schema=new Schema({
    title:String,
    url:String,
})

const bannerVideos=model('bannerVideos',schema)

export default bannerVideos