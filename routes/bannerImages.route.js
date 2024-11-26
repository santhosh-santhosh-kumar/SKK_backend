import express from "express";
import { images, imageDetails, imageCreate, imageUpdate, imageDelete} from "../controllers/bannerImages.controller.js";
import store from '../multer/store.js'
const router=express.Router()

//get for banner images
router.get('/', images);

//get single videos for images videos
router.get('/:id', imageDetails);


//post for images videos

router.post('/',store.array('images',3), imageCreate);

//put for images videos
router.put('/:id', imageUpdate);

//delete for images videos
router.delete('/:id', imageDelete);

export default router;
