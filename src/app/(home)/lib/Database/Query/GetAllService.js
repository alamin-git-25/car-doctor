
import { Service } from "../../models/service.model";
import { replaceMongoIdInArray } from "../../utils/Convert";
import connectDB from "../Database";



const getAllService = async () => {
  await connectDB()
  const getAll = await Service.find();
  return getAll;
}





export { getAllService};