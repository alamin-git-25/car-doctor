import { Schema,model,models } from "mongoose";

const paymentScema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
   
},{timestamps:true});

export const Payment = models.Payment || model("Payment", paymentScema) 