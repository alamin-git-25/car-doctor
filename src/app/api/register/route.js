import connectDB from "@/app/(home)/lib/Database/Database";
import { CreateUser } from "@/app/(home)/lib/Database/Query/createUser";
import { User } from "@/app/(home)/lib/models/User.model";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request)=>{
    const {name, email, password} = await request.json();
    await connectDB();
    const hashpasswd = bcrypt.hashSync(password, 5);
    const user = await User.findOne({email});
    const newUser = {
        name,
        email,
        password:hashpasswd
    };
    
    try {
      
       if (!user) {
        await CreateUser(newUser);
        return new NextResponse('User has been Created',{
            status:201
        })
       }
       
      
     
    } catch (error) {
        throw new Error(error)
        
    }
   
};