import Lyrica from "../model/lyrica.model.js"

export const getLyrica = async(req,res) => {
    try{
        const lyrica = await Lyrica.find()
        res.status(200).json(lyrica)
    } catch(error) {
          console.log("Error: ",error) 
          res.status(500).json(error)
    }
}