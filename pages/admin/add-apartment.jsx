import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Add_apartment() {

    const checkList = ["Bachelor", "Family", "Student", "Job holder"];
    const [checked, setChecked] = useState(false);
    const handleCheck = (event) => {
        setChecked(!checked) ;
    };

    return (
        <>
            <Head>
                <title>Add Apartment | Bariwala</title>
            </Head>
                <h1>Add Apartment Information</h1>
                <div>
                    <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={""}>
                        {/* Inputs */}
                        <div className="mb-3">
                            <input type="text" className="form-control" id="building_id" placeholder="Building Id" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="title" placeholder="Title" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="type" placeholder="Type" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="area" placeholder="Area (sqft)" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="room" placeholder="Number of Bed Room" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="bath" placeholder="Number of Bath" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="floor" placeholder="N-th Floor" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="rent" placeholder="Rent per month" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description " className="form-label">Description: </label>
                            <textarea className="form-control" id="description" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Accepted Status: </label>
                            {checkList.map((item, index) => (
                                <div key={index}>
                                    <input value={item} type="checkbox" id="status" onChange={handleCheck} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="images " className="form-label">Upload images </label>
                            <input type="file" className="form-control" id="images" />
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

export default Add_apartment