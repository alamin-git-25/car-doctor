
import { NextResponse } from 'next/server';
import { Service } from '../../../(home)/lib/models/service.model'
import connectDB from '@/app/(home)/lib/Database/Database';

export const GET = async (request, { params }) => {
  
    await connectDB()
    try {
        
            const book = await Service.findOne({_id : params.id}).lean();
            return new NextResponse(JSON.stringify(book),{status:200})
           
        


    } catch (error) {
        throw new Error(error)
    }
}