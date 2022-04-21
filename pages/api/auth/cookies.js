import jwt from "jsonwebtoken"
import 'dotenv/config'


export default async function (req, res) {
    // Getting cookies
    const token = req.cookies["token"]
    if (!token) {
        res.status(404).json({ msg:"Not Found"})
    }
   
    else{
        const verify = jwt.verify(token, process.env.JWT_SEC);
        if (!verify) {
            res.status(404).json({ msg: "Not Found" })
        }
        else {
            res.status(200).json({cookie: verify })
        }
    }
    
}