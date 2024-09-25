import { User } from "../../models/User.model";
import connectDB from "../Database"

export const getAllUser = async ()=>{
    try {
       await connectDB();
      const getAll =  await User.find() ;
      return getAll;
    } catch (error) {
        throw new Error(error.message)
    }
}