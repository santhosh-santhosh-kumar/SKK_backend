import { model, Schema } from "mongoose";

const schema = new Schema({
  // originalName: { type: String, required: true }, // Original file name
  fileName: { type: String, required: true, unique:true},
  contentType: { type: String},
  path: { type: String, },
  // filePath: { type: String, required: true, unique:true}, 
  // fileSize: { type: Number, required: true, unique:true},
  // fileType: { type: String, required: true, unique:true}, 
  // uploadDate: { type: Date, default: Date.now },
  // title: { type: String, unique: true, sparse: true },
});

const bannerImages = model("bannerImages", schema);

export default bannerImages;
