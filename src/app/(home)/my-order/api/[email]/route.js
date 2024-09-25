import connectDB from "@/app/(home)/lib/Database/Database"
import { Order } from "@/app/(home)/lib/models/order.model"
import { NextResponse } from "next/server";

export const GET = async(request, {params})=>{
    try {
        await connectDB()
        const myBooking = await Order.find({email: params.email});
        return new NextResponse(JSON.stringify(myBooking),{
            status:200
        })
    } catch (error) {
        console.log(error);
        
    }
}