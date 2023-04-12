import User from "@/models/UserModel.js"
import dbConnect from "@/util/dbConnect.js"
import bcrypt from "bcrypt"
const handler = async (req,res)=>{
        await dbConnect();
        const {method,query}=req
        const {id} = query
        if(method === "GET"){
                const user = await User.findById(id)
                res.status(200).json(user)
        }
        if(method === "PUT"){
                if (req.body.password) {
                        req.body.password = await bcrypt.hash(req.body.password, 10);
                        req.body.confirmPassword = await bcrypt.hash(
                          req.body.confirmPassword,
                          10
                        );
                      }
                try {
                    const user=await User.findByIdAndUpdate(id,req.body,{new:true})    
                    res.status(200).json(user)
                } catch (error) {
                        console.log(error);
                }
               
        }
       
}
export default handler