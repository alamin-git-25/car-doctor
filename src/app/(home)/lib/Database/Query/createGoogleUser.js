import { GoogleUser } from "../../models/Google.mode"
 

export const createGoogleUser = async (user)=>{
    try {
        await GoogleUser.create(user)
    } catch (error) {
        throw new Error(error)
    }
}