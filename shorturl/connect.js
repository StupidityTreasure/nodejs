/*import mongoose from "mongoose";

async function connectDB(url){
    return mongoose.connect(url);
    
}

export default connectDB
*/

import mongoose from "mongoose";

const connectDB = async () => {
  
  try {
    const URL = process.env.MongodbUri;
    await mongoose.set("strictQuery", true);
    await mongoose.connect(URL);
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connecting db", err);
  }
  
};
export default connectDB

