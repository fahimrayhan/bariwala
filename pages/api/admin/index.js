import jwt from "jsonwebtoken"
import 'dotenv/config'


export default async function (req,res){
    // Getting cookies
    const token = req.cookies["authToken"]
    if (!token) {
        res.redirect("/login")
    }
    // console.log(process.env.JWT_SEC)
    const verify = jwt.verify(token,process.env.JWT_SEC);

    if (!verify) {
       res.redirect("/login")
    }
    res.send("Success")
}