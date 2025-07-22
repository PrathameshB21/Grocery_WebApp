import { error } from "console";
import { on } from "events";
import mongoose from "mongoose";
import  "dotenv/config";

const mongoUrl = process.env.MongoUrl;
export const connectDb = async () => {
    try {
        await mongoose.connect(mongoUrl)
        console.log(`----------- Mongodb connected successfully-----------`)

        mongoose.connection.on('disconected', () => {
            console.log(`-------------- MOngodb disconnected ---------------`)
        })

        mongoose.connection.on('error', () => {
            console.log(`------------------ Error while connecting to mongodb---------------- 
                error:- ${error}`)
        })

    } catch (error) {
        console.log(`error,Unable to establish connection`, error)
    }

}

process.on(`SIGINT`, () => {
    mongoose.connection.close();
    console.log(`========= Connection terminated ==========`);
    process.exit(0);
})

