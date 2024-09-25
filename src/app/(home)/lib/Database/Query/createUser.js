import { User } from "../../models/User.model"


export const CreateUser = async (user)=>{
    try {
        await User.create(user)
    } catch (error) {
        throw new Error(error)
    }
}