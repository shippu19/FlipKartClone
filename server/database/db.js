import mongoose from "mongoose";
export const Connection = async (username,password)=>{
    const URL =`mongodb://${username}:${password}@ac-ixfa5tu-shard-00-00.dznfxjh.mongodb.net:27017,ac-ixfa5tu-shard-00-01.dznfxjh.mongodb.net:27017,ac-ixfa5tu-shard-00-02.dznfxjh.mongodb.net:27017/?ssl=true&replicaSet=atlas-ngebhg-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser:true});
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error while connecting with the database ",error.message);
    }
}

export default Connection; 