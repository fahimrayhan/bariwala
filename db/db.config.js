import mysql from 'serverless-mysql'
import 'dotenv/config'

//console.log(process.env.HOST, process.env.PORT,process.env.DB, process.env.USERNAME, process.env.PASSWORD);

export const db = mysql({
    config:{
        host: "localhost",
        port: 3306,
        database: "bariwala",
        user: "bariwalaTest",
        password: "bariwalaTest"
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