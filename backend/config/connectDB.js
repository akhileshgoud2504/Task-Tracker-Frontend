const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected...");
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;


{/*The below is can be used to connect to mongoDB and start server*/}

// const startServer = async () => {
//     try{
//         await connectDB();
//         app.listen(PORT,()=>{
//             console.log(`server running on port ${PORT}`)
//         });
//     } catch(error){
//         console.log(error);
//     }
// }

// startServer();