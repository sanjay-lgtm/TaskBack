import mongoose from "mongoose";
import paginate from 'mongoose-paginate-v2';
const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    password: {
        type: String,
        
    },
    image: {

        type: String
    },
    document: {
        type: String,
    },
    video: {
        type: String,

    },
    title:{
        type:String,
    },
    price:{
        type:String
    }






})

dataSchema.plugin(paginate);
export const data = mongoose.model("data", dataSchema);