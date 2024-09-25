
import connectDB from "@/app/(home)/lib/Database/Database";
import { Order } from "@/app/(home)/lib/models/order.model";
import { NextResponse } from "next/server";

export const POST = async (request)=>{
   try {
    const order = await request.json();
  await connectDB()
  
    
        await Order.create(order);
        return new NextResponse("Order Plased !",{
          status:201
         });  
     
  
    
   
  

 
   } catch (error) {
    throw new Error(error.message);
   
   }

    
}