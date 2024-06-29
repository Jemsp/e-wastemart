import mongoose from "mongoose";
// require('dotenv').config();

export function mongooseConnect(){
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }else{
        const uri = "mongodb+srv://kanishkchaudhary2005:DLsJ4RXHk0zbwNxG@cluster0.8kb74qk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        return mongoose.connect(uri);
    }
}