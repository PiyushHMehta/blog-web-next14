import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectToDB = async () => {
    const connectionUrl = process.env.MONGO_URI
    mongoose.connect(connectionUrl).then(() => console.log('Connected to databse succesfully')).catch(e => console.log('Error connecting to database'))
}

export default connectToDB