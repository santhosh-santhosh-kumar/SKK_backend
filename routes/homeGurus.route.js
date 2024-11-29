import express from "express";
import {getGurus, getSingleGuru, postGurus, updateGuru, deleteGuru} from "../controllers/homeGurus.controller.js"
import homeGuruMulter from "../multer/gurus.multer.js";

const router=express.Router()


//get methode 

router.get('/',getGurus)

//get methode - single guru

router.get('/id',getSingleGuru)

//post methode

router.post('/',homeGuruMulter.single('gurus'),postGurus)

//update methode

router.put('/id',updateGuru)


//delete methode

router.delete('/id',deleteGuru)

export default router;