import multer from "multer";
import path from 'path';

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname, 'bannerImages'))
    },
    filename:(req,file,cb)=>{
    cb(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname))
    }
})

export default multer({storage:storage})

    // fileFilter:(req,file,cb)=>{
    //     const fileTypes=/jepg|jpg|png|svg/;
    //     const mimetype=fileTypes.test(file.mimetype)
    //     const extname=fileTypes.test(path.extname(file.originalname).toLowerCase())
    //     if(mimetype && extname){
    //          return cb(null,true)
    //     }
    //     cb("Error:file upload failed select ")
    // }

