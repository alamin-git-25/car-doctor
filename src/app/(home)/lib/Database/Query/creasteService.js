import { Service } from "../../models/service.model";

export const createService = async (service)=>{
    try {
        await Service.create(service);
    } catch (error) {
        throw new Error(error.message)
    }
}