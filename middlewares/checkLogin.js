import jwt from 'jsonwebtoken'
import 'dotenv/config'
const checkLogin = (req,res,next) => {

    const {authorization} = req.headers;
    
    try {
        
        const token = authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SEC)
        const {username, role} = decoded

        req.username = username
        req.role = role
        next()

    } catch (error) {
        next("Authentication Failed")
        console.log(error.message);
    }

}

export default checkLogin