import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import {useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';

const UserReg = () => {

    const [username,setUsername] = useState("")

    const registerUser = async event => {
        event.preventDefault()

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
                    role: 4

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

    return ( 
        <div>
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
                {/* <div className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Birth Date</label>
                            <input type="date" className="form-control" id="date" required />
                        </div>
                    </div> */}
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
                            <Link href="/reg-owner">
                                <a> Property Owner</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
     );
}
 
export default UserReg;