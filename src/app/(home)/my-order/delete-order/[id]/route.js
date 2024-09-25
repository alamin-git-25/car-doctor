import connectDB from "@/app/(home)/lib/Database/Database"
import { Order } from "@/app/(home)/lib/models/order.model";
import { NextResponse } from "next/server";
export const DELETE = async (request,{params})=>{
    try {
        await connectDB();
        const deleteBooking = await Order.deleteOne({_id : params.id });
        return new NextResponse(JSON.stringify(deleteBooking),{
            status:200
        })
    } catch (error) {
        return new NextResponse("wrong")
    }
}