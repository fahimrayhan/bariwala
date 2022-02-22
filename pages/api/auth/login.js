import {
    sql_query
} from "../../../db/db.config";
import valid from "../../../utils/validate"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import 'dotenv/config'


export default async function handler(req, res) {

    // Getting email and pass from body
    const {
        email,
        pass
    } = req.body;

    // Checking validity of email and pass
    const isValid = valid(email, email, pass, pass);

    if (!isValid) {
        // TryCache Incase Any Error Occur
        try {
            // Checking user exist or not
            const results = await sql_query(
                `SELECT * FROM users WHERE u_mail ="${email}" `
            )
            // If User exists
            if (results && results.length > 0) {

                // Checking password matched or not
                const isValidPass = await bcrypt.compare(pass, results[0].u_pass)

                if (isValidPass) {
                    // Token Generation
                    const token = jwt.sign({
                        username: results[0].u_name,
                        role: results[0].role_id
                    }, process.env.JWT_SEC, {
                        expiresIn: '1h'
                    })

                    // Token Gen Successfull
                    res.json({
                        "access-token":token,
                        "msg": "Login Successfull"
                    })
                }
                // If Password Does not match
                else {
                    res.status(401).json({
                        msg: "Authentication Error!"
                    })
                }
            }
            // If User Does Not Exist
            else {
                res.status(401).json({
                    msg: "Authentication Failed!"
                })
            }
        } catch (error) {
            res.json({ msg: "Error!" })
        }
        
    }
    // if not valid email/pass then error
    else {
        res.json({
            msg: isValid
        })
    }
}