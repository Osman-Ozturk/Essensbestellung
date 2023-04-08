import User from "@/models/UserModel.js"
import dbConnect from "@/util/dbConnect.js"

const handler = async (req,res)=>{
        await dbConnect();
        const {method}=req
        if(method === "GET"){
                const users = await User.find({})
                res.status(201).json(users)
        }
        if (methode === "POST") {
             const newUser = await User.create(req.body)  
             res.status(201).json(newUser)

        }
}

export default handler