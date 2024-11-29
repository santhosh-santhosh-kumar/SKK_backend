import programs from "../models/programs.model.js";
//get methode - all
export const getPrograms = async (req, res) => {
  try {
    const findPrograms = await programs.find();
    res.json(findPrograms);
  } catch (err) {
    res.staus(500).json({ err: err.message });
  }
};
//get 
export const getProgram = async (req, res) => {
  try {
    const findPrograms = await programs.findById({ _id: req.params.id });
    res.json(findPrograms);
  } catch (err) {
    res.staus(500).json({ err: err.message });
  }
};

//post methode
export const postPrograms = async (req, res) => {
  try {
    const files = new programs({
      program_name: req.body.program_name,
      description: req.body.description,
      url: `http://localhost:3000/programImages/${req.file.filename}`,
    });
    await files.save();

    res.status(200).send("posted");
  } catch (err) {
    res.staus(500).json({ err: err.message });
  }
};

//put methode
export const updatePrograms = async (req, res) => {
  try {
    const findPrograms = await programs.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!findPrograms) {
        return res.status(404).json({ message: "Files not found" });
      }
    res.json(findPrograms);
  } catch (err) {
    res.staus(500).json({ err: err.message });
  }
};

//delete methode
export const deletePrograms = async (req, res) => {
    try {
        await programs.deleteOne({ _id: new ObjectId(req.params.id) });
        res.send("delete");
      } catch (err) {
        res.status(500).send("not delete");
      }
};
