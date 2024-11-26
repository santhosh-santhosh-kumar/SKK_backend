import { model,Schema } from "mongoose"

const schema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    url:{
        type:String,
        required:true,
        unique:true

    }
})
const bannerShorts=model("bannerShorts",schema)

export default bannerShorts