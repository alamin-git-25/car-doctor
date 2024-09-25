import connectDB from "@/app/(home)/lib/Database/Database";
import { createProducts } from "@/app/(home)/lib/Database/Query/createProduct";
import { Product } from "@/app/(home)/lib/models/product.model";
import { NextResponse } from "next/server";

export const POST = async (request) =>{
    const product = await request.json();
    try {
        await connectDB()
        await createProducts(product);
       
    } catch (error) {
        throw new Error(error.message);
    }
    return new NextResponse("Products Added", {
        status: 201
    })
}