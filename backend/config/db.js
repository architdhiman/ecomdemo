import mongoose from "mongoose";

export const connectDb = async() =>{
    try {
       const connect = await mongoose.connect("mongodb://localhost:27017/e-commerceDemo")
       console.log("Connected to Db successfully ") 
    } catch (error) {
        console.log(error);
    }
}