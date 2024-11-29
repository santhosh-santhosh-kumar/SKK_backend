import express from 'express';
import {getPrograms,getProgram,postPrograms,updatePrograms,deletePrograms} from '../controllers/programs.controller.js'
import programsMulter from '../multer/programs.multer.js'
const router=express.Router();


router.get('/',getPrograms)
router.get('/:id',getProgram)
router.post('/',programsMulter.single('programs'),postPrograms)
router.put('/',updatePrograms)
router.delete('/',deletePrograms)

export default router