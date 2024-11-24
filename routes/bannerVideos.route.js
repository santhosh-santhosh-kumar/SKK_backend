import express from 'express';
import {videoDelete, videoIndex, videoUpdate,videoCreate,videoDetails} from "../controllers/bannerVideos.controllers.js"
const router = express.Router();

//get for banner videos
router.get('/', videoIndex);

//get single videos for banner videos
router.get('/:id', videoDetails);


//post for banner videos
router.post('/', videoCreate);

//put for banner videos
router.put('/:id', videoUpdate);

//delete for banner videos
router.delete('/:id', videoDelete);

export default router;
