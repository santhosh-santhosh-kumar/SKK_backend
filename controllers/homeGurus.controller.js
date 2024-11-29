import connectDB from "../database/db.js";
import gurus from "../models/homeGurus.model.js";

//get methodev-all
export const getGurus = async (req, res) => {
  try {
    const gurusData = await gurus.find();
    res.status(200).json(gurusData);
  } catch (err) {
    res.status(200).json({ err: err.message });
  }
  res.json(req.body);
};

//get methode - single
export const getSingleGuru = async (req, res) => {
  try {
    const guruData = await gurus.findById(req.params.id);
    console.log(guruData)
    if (!guruData) {
      res.status(404).send("file not found");
    } else {
      res.status(200).json(guruData);
    }
  } catch (err) {
    res.status(200).json({ err: err.message });
  }
};

//post methode

export const postGurus = async (req, res) => {
  const file = req.file;
  try {
    const newFile = new gurus({
      name: req.body.name,
      about: req.body.about,
      url: `https://skk-backend.onrender.com/homeGurusImages/${file.filename}`,
    });
    await newFile.save();
    res.status(200).json({ data: newFile });
  } catch (err) {
    res.staus(500).json({ err: err.message });
  }
};

//update methode

export const updateGuru = async (req, res) => {
  try {
    const updateGuru = await gurus.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    if (!updateGuru) {
      return res.status(404).json({ message: "Files not found" });
    }
    res.status(200).json(updateGuru);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

//delete methode

export const deleteGuru = async (req, res) => {
  try {
    await gurus.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send("delete");
  } catch (err) {
    res.status(500).send();
  }
};
