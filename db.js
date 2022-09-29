import mongoose from "mongoose";
import 'dotenv/config'
const DB = require("./config").get(process.env.node_env).DB;


const MONGOURL = `mongodb://${DB.HOST}:${DB.PORT}/${DB.DATABASE}`
console.log(MONGOURL)

const Option={

user:DB.USERNAME,
pass:DB.PASSWORD,


}

export const  mongoconnection=async()=>{

try{

    await mongoose.connect(MONGOURL,Option);
    console.log("CONNECTION TO DB");

}catch(e){
console.log(e);
throw e
}

}