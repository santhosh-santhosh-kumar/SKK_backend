import multer  from "multer";
import path from 'path';

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
     cb(null,"homeGurusImages")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname))
    }
})

export default multer({storage:storage})