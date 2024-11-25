import { model, Schema } from "mongoose";

const schema=new Schema({
    imageUrl: { type: String, required: true },
    title: { type: String },
    createdAt: { type: Date, default: Date.now },
})

const bannerImages=model('bannerImages',schema)

export default bannerImages