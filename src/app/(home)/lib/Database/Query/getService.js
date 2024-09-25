import { Product } from "../../models/product.model";

export const getDetails = async (_id)=>{
  const res = await fetch(`http://localhost:3000/api/alamin/${_id}`);
  const data = await res.json();
  console.log(data,'getDet');
  
  return data
};

export const getAllProducts = async ()=>{
   try {
     const products = await Product.find().lean()
     return products;
   } catch (error) {
    throw new Error(error.message);
   }
}