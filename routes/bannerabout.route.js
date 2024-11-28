import express from "express";
import { getAbout,postAbout,getAboutAll,deleteAbout} from "../controllers/bannerabout.controller.js";
//import aboutMulter from "../multer/about.multer.js";
//aboutMulter.single('image',1)
const router=express.Router()

router.get('/', getAbout)
router.get('/:id', getAboutAll)
router.post('/', postAbout)
router.delete('/',deleteAbout)

export default router
