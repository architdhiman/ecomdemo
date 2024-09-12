import user from "../model/user.js"
import JWT from "jsonwebtoken"
const SECRET_KEY = "hello2024"

export const loginController = async(req,res) =>{
    try {
        const{email,password} = req.body
        const User = await user.findOne({email: email})
        if(!User) {
           return res.staus(401).json({success: false,message: "User not found"}) 
        }
        if(User.password != password) {
            return res.staus(401).json({success: false,message: "Wrong password"}) 
         }
        const token = JWT.sign({_id:User._id},SECRET_KEY,{expiresIn:'7d'})
        return res.status(200).json({success:true,message:"logged in successfully",token})
    } catch (error) {
        return res.status(500).send({
            message: "error while logging in",
            error,
            success: false,
          });
    }
}

export const registerController = async(req,res) =>{
    try {
        const{name,email,password,phone} = req.body
        const userExist = await user.findOne({email})
        if(userExist) {
            return res.json({success: false,message:"User already registered"})
        }

        const newUser = await user.create({name:name,email:email,password:password,phone:phone})
        return res.status(201).json({success:true,message:"User created successfully",newUser})

    } catch (error) {
        return res.status(500).send({
            message: "error while registering",
            error,
            success: false,
          });
    }
}
