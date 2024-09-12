import { mongoose } from "mongoose";

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    }
})

export default mongoose.model("Product",ProductSchema)