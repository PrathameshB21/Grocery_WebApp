import express from 'express'
import { connectDb } from './config/dbConnection.js';
import userRouter from './routes/userRoutes.js';
import selllerRouter from './routes/sellerRoutes.js';
import cookieParser from 'cookie-parser';
import connectCloudinary from './config/cloudinary.js';
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
await connectDb()
await connectCloudinary()

app.get('/testing', async (req, res) => {
    res.send('working fine')
})

app.use('/userAuthRoutes', userRouter);
app.use('/selllerRoutes',selllerRouter)

app.listen(5000, console.log(`server listening`))