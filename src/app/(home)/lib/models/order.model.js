import { Schema, model, models} from "mongoose";

const orderScema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },

  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  date:{
    type:String,
    required:true
  },
},{timestamps:true});

export const Order = models.Order || model("Order", orderScema)