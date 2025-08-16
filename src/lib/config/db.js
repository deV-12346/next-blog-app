import mongoose from "mongoose";
export const connectDB =async () =>{
      try {
            const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_STRING}/blogs`)
            console.log("Mongo DB connected successfully Hoosted on : ",connectionInstance.connection.host)
      } catch (error) {
            console.log(error.message)
            process.exit(1)
      }
} 