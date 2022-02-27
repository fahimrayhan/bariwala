import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Add_building() {

    return (
        <>
            <Head>
                <title>Add Building | Bariwala</title>
            </Head>
                <h1>Add Building Information</h1>
                <div>
                    <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={""}>
                        {/* Inputs */}
                        
                        <div className="mb-3">
                            <input type="text" className="form-control" id="city" placeholder="City" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="thana" placeholder="Thana" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="Address" placeholder="Address" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="city" placeholder="City" required/>
                        </div>
                        <div className="mb-3">
                            <span>Lift </span>
                            <input type="radio" name="yes" value="Yes"/>
                            <label htmlFor="yes" className="form-label">Yes</label>
                            <input type="radio" name="no" value="No"/>
                            <label htmlFor="yes" className="form-label">No</label>
                        </div>
                        <div className="mb-3">
                            <span>Garage </span>
                            <input type="radio" name="yes" value="Yes"/>
                            <label htmlFor="yes" className="form-label">Yes</label>
                            <input type="radio" name="no" value="No"/>
                            <label htmlFor="yes" className="form-label">No</label>
                        </div>
                        
                        
                        
                        {/* Inputs Ends*/}
                        {/* Submit Buttons & Links */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary text-center">Submit</button>
                        </div>
                    </form>
                    <ToastContainer/>
                </div>
        </>
    )
}

export default Add_building