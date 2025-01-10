const express=require('express')
const cookieParser=require('cookie-parser')
require('dotenv').config()

const connectDB=require('./config/db')
const corsOptions=require('./config/cors')
const productRouter=require('./routes/product/product-routes')
const careerRouter=require('./routes/career/career-routes')
const authRouter=require('./routes/auth/auth-routes')
const careerVideo = require('./models/CareerVideo')

connectDB()

const app=express()

app.use(corsOptions);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRouter);
app.use('/api/product',productRouter);
app.use('/api', careerRouter);

const PORT=process.env.PORT || 5000


app.listen(PORT,()=>console.log(`Server is now listening on ${PORT}`))