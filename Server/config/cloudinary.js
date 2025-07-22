import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'

const connectCloudinary=async()=>{
    cloudinary.config({
            cloud_name:process.env.Cloud_Name,
            api_key:process.env.Cloud_API_Key,
            api_secret:process.env.Cloud_Secret_Key
    })
}

export default connectCloudinary