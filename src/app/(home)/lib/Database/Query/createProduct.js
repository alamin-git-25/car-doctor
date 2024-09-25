import { Product } from "../../models/product.model"

export const createProducts = async (product)=>{
    try {
        await Product.create(product);
    } catch (error) {
        throw new Error(error.message);
        
    }
}