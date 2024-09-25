import { Schema, model,models } from "mongoose";

const serviceSchema = new Schema({
    service_id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    facility:[{
        name:{
            type:String,
            required:true,
           },
           
       details:{
        type:String,
        required:true
       }
    }]
   
},{});

export const Service = models.Service || model("Service", serviceSchema);