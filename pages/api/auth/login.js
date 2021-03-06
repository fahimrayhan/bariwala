import {
    sql_query
} from "../../../db/db.config";
import valid from "../../../utils/validate"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import 'dotenv/config'
import cookie from 'cookie'




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
                `SELECT * FROM users  WHERE email ="${email}" `
            )
            // If User exists
            if (results && results.length > 0) {

                // Checking password matched or not
                const isValidPass = await bcrypt.compare(pass, results[0].password)

                if (isValidPass) {
                    // Token Generation
                    const token = jwt.sign({
                        id: results[0].user_id,
                        username: results[0].user_name,
                        full_name: results[0].full_name,
                        role: results[0].role_id,
                        parent: results[0].parent_id
                      
                    }, process.env.JWT_SEC, {
                        expiresIn: 60*60
                    })

                    const refresh_token = jwt.sign({
                        id: results[0].user_id,
                    }, process.env.REFFRESH_SEC, {
                        expiresIn: 60*60
                    })

                   

                    // Generating Cookies
                    const serialize = cookie.serialize('token', token, {
                        httpOnly: true,
                        secure: true,
                        sameSite: "strict",
                        maxAge: 60 * 60,
                        path: '/'
                    })


                    // Storing Cookies
                    res.setHeader('Set-Cookie', serialize)


                    // Redirect
                    // res.status(200).redirect("http://localhost:3000/admin/")

                    // Token Gen Successfull
                    res.status(200).json({
                        "token": token,
                        "refresh_token":refresh_token,
                        "user": {
                            id: results[0].user_id,
                            full_name: results[0].full_name,
                            username: results[0].user_name,
                            email: results[0].email,
                            role: results[0].role_id,
                            parent: results[0].parent_id,
                            occupation: results[0].occupation,
                            desc: results[0].user_desc,
                            balance: results[0].balance
                        },
                        "msg": "Login Successfull"
                    })
                }
                // If Password Does not match
                else {
                    res.status(401).json({
                        msg: "Wrong Email or Password"
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
            res.json({ msg: error.message })
        }

    }
    // if not valid email/pass then error
    else {
        res.json({
            msg: isValid
        })
    }
}