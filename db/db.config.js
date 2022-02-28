import mysql from 'serverless-mysql'
import 'dotenv/config'


export const db = mysql({
    config:{
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DB,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
        
    }
})


export async function sql_query(query,values=[]) {
    try {
        const results = await db.query(query,values)
        await db.end()
        return results
    } catch (error) {
        console.error(error.message)
    }
}