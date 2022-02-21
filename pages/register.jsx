import Head from 'next/head';
import Link from 'next/link';

function register() {
    return (
        <>
            <Head>
                <title>Register | Bariwala</title>
            </Head>
                <h1>Register</h1>
                <div>
                    <form className="p-5 mx-auto" style={{ maxWidth: '500px' }}>
                        {/* Inputs */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="phone" className="form-control" id="phone" required  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Birth Date</label>
                            <input type="date" className="form-control" id="date" required  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" />
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
                                    <Link href="/register">
                                        <a> Property Owner</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default register