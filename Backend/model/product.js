import mongoose from "mongoose";
const Schema=mongoose.Schema
const product =new Schema({
    title:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    discount :{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    productpic:{
        type:String,
        required:true
    }
   
})
export default  mongoose.model('products',product)