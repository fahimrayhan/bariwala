import mysql from 'serverless-mysql'
import 'dotenv/config'


export const db = mysql({
    config:{
        host: "localhost",
        port: 3446,
        database: "bariwala_db",
        user: "fahim",
        password: "fahim1160"
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