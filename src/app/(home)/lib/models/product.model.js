import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
       
    },
    price:{
        type:Number,
        required:true,
    },
},{timestamps:true});


export const Product = models.Product || model("Product", productSchema);