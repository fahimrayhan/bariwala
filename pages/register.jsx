import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function register() {

    const registerUser = async event => {
        event.preventDefault()

        const res = await fetch(
            'api/auth/register',
            {
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                    phone: event.target.phone.value,
                    birthdate: event.target.b_date.value,
                    pass1: event.target.pass1.value,
                    pass2: event.target.pass2.value

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
        <>
            <Head>
                <title>Register | Bariwala</title>
            </Head>
                <h1>Register</h1>
                <div>
                    <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={registerUser}>
                        {/* Inputs */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="phone" className="form-control" id="phone" required  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="b_date" className="form-label">Birth Date</label>
                            <input type="date" className="form-control" id="b_date" required  />
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
                    <ToastContainer/>
                </div>
        </>
    )
}

export default register