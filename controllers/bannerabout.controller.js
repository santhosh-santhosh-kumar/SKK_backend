import bannerAbout from "../models/bannerabout.model.js";
import fs from "fs";

//get methode - all
export const getAbout = async (req, res) => {
  try {
    const aboutImage = await bannerAbout.find();
    res.status(200).send(aboutImage);
  } catch (err) {
    res.status(200).json({ err: err.message });
  }

};

//get methode - single

export const getAboutAll = async (req, res) => {
  try {
    const aboutImageSingle = await bannerAbout.findById(req.params.id);
    res.status(200).json(aboutImageSingle);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
//post methode
export const postAbout = async (req, res) => {
  const file = req.file;
  if (!req.file) {
    return res.status(500).send("no file uploads");
  }
  try {
    const findOldFiles = await bannerAbout.find()
      findOldFiles.forEach((value) => {
        if (fs.existsSync(value.path)) {
          fs.unlinkSync(value.path);
        }
        bannerAbout.deleteOne({ _id: value._id })
      });

    const files = {
      filename: file.filename,
      path: file.path,
      url: `http://localhost:3000/homeAboutImages/${file.filename}`,
    };
    
    const newFile = new  bannerAbout(files);
    await newFile.save();
    res.status(200).send("image upload");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

//delete methode

export const deleteAbout = async (req, res) => {
  try {
    const deleteImage = await bannerAbout.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.status(200).send("delete succefully");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
