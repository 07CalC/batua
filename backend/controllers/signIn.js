import { setCookie } from "../../utils/cookieSetter.js"
import User from "../models/user.js"


export const signIn = async (req, res) => {

    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({message: "insufficient data"})
        }
        const user = await User.findOne({email: email})
        if(!user){
            return res.status(400).json({message: "user not found"})
        }
        setCookie(user._id, res)
        return res.status(200).json({message: "successfully Logged in", user: user})    
    
}
    catch(error){   
        console.log("error in sign in controller ", error)
        res.status(500).json({message: "internal server error"} )
}
}