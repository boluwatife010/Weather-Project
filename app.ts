import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import weatherRouter from './src/routes/weather.route';
import mongoose from "mongoose";
import {createClient} from "redis";
dotenv.config();
const connectDb = async ( ) => {
   try {
    await mongoose.connect(process.env.MONGODB_URI!, {
        tls: true,
        tlsAllowInvalidCertificates: true,
    }!);
    console.log("connected to MongoDb");
   }
   catch(err) {
    console.log('Failed to connect to MongoDb', err);
    process.exit(1);
   }
}

export const redisClient = createClient({
    url: process.env.REDIS_URL
})
redisClient.on('error', (err) => console.log("Redis Client Error", err));
redisClient.on('connect', () => {
    console.log('Connected to Redis');
});
connectDb();
redisClient.connect();
const app = express();
app.use(bodyParser.json());
app.use('/weather', weatherRouter);
const PORT = process.env.PORT || 8089
app.listen(PORT, async() => {
    console.log("connected to port successfully :)")
})