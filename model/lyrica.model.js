import mongoose from "mongoose"

const lyricaSchema=mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
})
const Lyrica=mongoose.model("lyrica", lyricaSchema)

export default Lyrica