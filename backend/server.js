import express from 'express';
import authRoutes from './routes/authRoutes.js';
import { connectDb } from './config/db.js';
import cors from "cors"

const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors())
connectDb()

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

app.get('/health-check', (req,res)=>{
    return res.json({message:"health-check working fine",status:"ok"})
})

app.use("/auth",authRoutes)
