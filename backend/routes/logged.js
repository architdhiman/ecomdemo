import JWT from "jsonwebtoken"
const SECRET_KEY = "hello2024"

export const requiredSignin = (req,res,next) =>{
    try {
        const token = req.headers.authorization

        if(!token)
        {
            return res.status(401).json({ message: "Authentication required" });
        }

        const decode = JWT.verify(token,SECRET_KEY)
        req.user = decode
        next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
        
    }
}