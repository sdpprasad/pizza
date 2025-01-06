import mongoose from "mongoose";
const Schema=mongoose.Schema
const shop =new Schema({
    imageurl:{
        type:String,
        // required:true
    },
    name:{
        type:String,
        // required:true
    },
    prize:{
        type:String,
        // required:true
    }
    
   
})
export default  mongoose.model('shop',shop)