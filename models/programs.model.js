import {model,Schema} from 'mongoose'

const schema=new Schema({
    program_name:{type:String,require:true},
    description:{type:String},
    url:{type:String,require:true},
})

const programs=model('programs',schema)

export default programs;