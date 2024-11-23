import express from 'express';
import {videoDelete, videoIndex, videoUpdate,videoCreate} from "../controllers/bannerVideos.controllers.js"
const router = express.Router();

//get for banner videos
router.get('/', videoIndex);

//post for banner videos
router.post('/', videoCreate);

//put for banner videos
router.put('/:id', videoUpdate);

//delete for banner videos
router.delete('/:id', videoDelete);

export default router;
