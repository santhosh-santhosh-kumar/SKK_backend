import { Schema,model } from "mongoose";

const schema=new Schema(
    {
        name:{type:String,require:true},
        about:{type:String,require:true},
        url:{type:String},
    }
)

const gurus = model("gurus", schema);

export default gurus;
