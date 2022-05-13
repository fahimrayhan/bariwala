import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import {useState, useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';


function register() {

    

    const [username,setUsername] = useState("")
    const [role,setRole] = useState(4)
    const [nid,setNid] = useState("")
    const [regOwner,setRegOwner] = useState(false)

    const registerUser = async event => {
        event.preventDefault()
        console.log(nid)
        const res = await fetch(
            'api/auth/register',
            {
                body: JSON.stringify({
                    name: event.target.name.value,
                    username: event.target.username.value,
                    email: event.target.email.value,
                    phone: event.target.phone.value,
                    birthdate: event.target.b_date.value,
                    pass1: event.target.pass1.value,
                    pass2: event.target.pass2.value,
                    role: role,
                    nid: nid
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const results = await res.json()
        toast(JSON.stringify(results.msg));
    }

    useEffect(() => {
      console.log("Hello")
    }, [regOwner])
    

    return (
        <>
            <Head>
                <title>Register | Bariwala</title>
            </Head>
            
            <div className="container">
                <div className="border border-4 rounded-3 m-5">
                    <h1 className="text-center mt-3">Register</h1>
                    <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={registerUser}>
                        {/* Inputs */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" required
                                onChange={(event) =>{
                                    const name = event.target.value.toLowerCase().replace(' ','-')
                                    setUsername(name);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="username" required placeholder="username" value={username} disabled/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="phone" className="form-control" id="phone" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="b_date" className="form-label">Birth Date</label>
                            <input type="date" className="form-control" id="b_date" required />
                        </div>
                        {/* For Owner Reg */}
                        {
                            regOwner ?
                            <div className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="nid" className="form-label">NID</label>
                                    <input type="number" className="form-control" id="nid" required onChange={(e) => {
                                        setNid(e.target.value)
                                        // console.log(e.target.value)
                                    }}/>
                                </div>
                            </div> : <></>
                        }
                        {/* For Owner Reg Ends*/}
                        <div className="mb-3">
                            <label htmlFor="pass1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pass1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass2" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="pass2" />
                        </div>
                        {/* Inputs Ends*/}
                        {/* Submit Buttons & Links */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary text-center">Submit</button>
                            <div className="mt-2">
                                <p>Already have an account?
                                    <Link href="/login">
                                        <a> Login</a>
                                    </Link>
                                </p>
                                <p>
                                    Register as a
                                    {/* <Link href="/reg-owner">
                                        <a> Property Owner</a>
                                    </Link> */}
                                    <button className='btn btn-success ms-2' onClick={() => {
                                        setRegOwner(true);
                                        setRole(2)
                                    }}>Property Owner</button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default register