import mongoose from "mongoose";

const connectMongoDB = () => {
    try{
        mongoose.connect(process.env.mongodburi)
        console.log("Connected to MongoDB");
    } catch(error) {
        console.log(error)
    }
}

export default connectMongoDB;