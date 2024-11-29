import programs from "../models/programs.model.js";
//get methode - all
export const getPrograms = async (req, res) => {
  res.send(req.body);
};

//get methode
export const getProgram = async (req, res) => {
  res.send(req.body);
};

//post methode
export const postPrograms = async (req, res) => {
  try {
    const files = new programs({
      program_name: req.body.program_name,
      description: req.body.description,
      url: `https://skk-backend.onrender.com/programImages/${req.file.filename}`,
    });
    await files.save();
    console.log(files)
    res.status(200).send("posted");
  } catch (err) {
    res.staus(500).json({ err: err.message });
  }
 
};

//put methode
export const updatePrograms = async (req, res) => {
  res.send("update");
};

//delete methode
export const deletePrograms = async (req, res) => {
  res.send("delete");
};
