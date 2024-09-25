import connectDB from "@/app/(home)/lib/Database/Database";
import { createService } from "@/app/(home)/lib/Database/Query/creasteService";

import { NextResponse } from "next/server";

export const POST = async(request)=>{
    
    try {
        await connectDB()
        const service = await request.json();
        await createService(service);
    } catch (error) {
        throw new Error(error)
    }
    return new NextResponse('User has been Created',{
        status:201
    })
}