import {NextResponse} from 'next/server'
import jwt from 'jsonwebtoken'


export default function middleware(req) {
    const cookie = req.cookies["token"]
    // console.log(process.env.JWT_SEC)
    if (cookie) {
        // console.log(cookie)
        const verify = jwt.verify(cookie,process.env.JWT_SEC)
        if (verify) {
            return NextResponse.next()
        }
        else{
            return NextResponse.redirect("http://localhost:3000/login")
        }
    }
    else{
        return NextResponse.redirect("http://localhost:3000/login")
    }
}