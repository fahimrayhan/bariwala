import {useContext} from 'react'
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'

function login() {

    const {  dispatch } = useContext(DataContext)
    

    const router = useRouter()

    const loginUser = async event => {
        event.preventDefault()
        const res = await fetch(
            'api/auth/login',
            {
                body: JSON.stringify({
                    email: event.target.email.value,
                    pass: event.target.pass.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const results = await res.json()

        dispatch({type: 'AUTH', payload:{
            token : results.token,
            user: results.user
        }})

        Cookie.set('refresh_token', results.refresh_token,{
            path: 'api/auth/accesstoken',
            expires: 1/24
        })

        localStorage.setItem('firstLogin',true)

        toast(JSON.stringify(results.msg));
        setTimeout(() => {
            if (res.status == 200) {
                router.push("/admin/")
            }
        }, 3000);
    }

    return (
        <>
            <Head>
                <title>Login | Bariwala</title>
            </Head>
            <h1>Login</h1>
            <div>
                <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={loginUser}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input type="password" className="form-control" id="pass" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary text-center">Login</button>
                        <div className="mt-2">
                            <p>Don't have an account?
                                <Link href="/register">
                                    <a> Register</a>
                                </Link>
                            </p>
                            <ToastContainer />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default login