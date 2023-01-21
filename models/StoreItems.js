import mongoose from "mongoose";


const Schema = mongoose.Schema;

let StoreItems = new Schema({
    title: {type:String}, 
    price:{type:String},
    description: {type:String},
    category: {type:String},
    image: {type:String},
    comments: {type:String}
})


export default mongoose.model("item", StoreItems);