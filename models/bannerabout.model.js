import express from "express";
import { Schema,model} from "mongoose";

const schema = new Schema({
  filename: { type: String, required: true, unique: true },
  path: { type: String },
  url: { type: String },
});

const bannerAbout = model("bannerAbout", schema);

export default bannerAbout;
