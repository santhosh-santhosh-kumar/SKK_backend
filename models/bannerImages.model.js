import { model, Schema } from "mongoose";

const schema = new Schema({
  fileName: { type: String, required: true, unique:true},
  contentType: { type: String},
  path: { type: String, },
});

const bannerImages = model("bannerImages", schema);

export default bannerImages;
