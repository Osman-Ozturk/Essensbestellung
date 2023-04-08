import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
        {
                name:{
                        type:String,
                        require:true
                },
                email:{
                        type:String,
                        require:true
                },               
                 password:{
                        type:String,
                        require:true
                },
                confirmPassword:{
                        type:String,
                        require:true
                },
                phoneŃumber:{
                        type:String,
                },
                addresse:{
                        type:String,
                },
                bio:{
                        type:String,
                }
        },{timestamps:true}
)
const User = mongoose.model(UserSchema,"users")