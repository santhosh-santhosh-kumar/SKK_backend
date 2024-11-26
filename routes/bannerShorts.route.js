import express from 'express';
import { shortsIndex,shortsDetails,shortsCreate,shortsUpdate,shortsDelete } from '../controllers/bannerShorts.controller.js';
const router = express.Router();

//get for banner videos
router.get('/', shortsIndex);

//get single videos for banner videos
router.get('/:id', shortsDetails);


//post for banner videos
router.post('/', shortsCreate);

//put for banner videos
router.put('/:id', shortsUpdate);

//delete for banner videos
router.delete('/:id', shortsDelete);

export default router;
