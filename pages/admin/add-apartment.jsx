

import Head from 'next/head'
import AuthLayout from '../../components/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function addapartment() {

  const handleSubmit = async(event) => {
      event.preventDefault()
      const res = await fetch(
        '/api/admin/addproperty',
        {
          body: JSON.stringify({
            title: event.target.title.value,
            beds: event.target.beds.value,
            desc: event.target.desc.value,
            bath: event.target.bath.value,
            month: event.target.month.value,
            floor: event.target.floor.value,
            rent: event.target.rent.value,
            type: event.target.type.value,
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
      const results = await res.json()
      console.log(results)
      toast(JSON.stringify(results.msg));
  }

  return (
    <>
      <Head>
        <title>Add a new apartment</title>
      </Head>
        <h1>Add Apartment</h1>
      <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" name="title" id="title" required placeholder="Single apartment for rent."/>
          </div>
          <div className="mb-3">
              <label htmlFor="beds" className="form-label">Number of Bedrooms</label>
              <input type="number" className="form-control" name="beds" id="beds" required placeholder="0"/>
          </div>
          <div className="mb-3">
              <label htmlFor="desc" className="form-label">Descriptions</label>
              <textarea  id="desc" className="form-control"></textarea>
          </div>
          <div className="mb-3">
              <label htmlFor="bath" className="form-label">Baths</label>
              <input type="number" className="form-control" id="bath" required placeholder="0"/>
          </div>
          <div className="mb-3">
            <label htmlFor="month" className="form-label">Available From Month</label>
          <input type="date" className="form-control" id="month" required />
          </div>
          <div className="mb-3">
            <label htmlFor="floor" className="form-label">Which Floor?</label>
            <input type="number" className="form-control" id="floor" required placeholder="1st" />
          </div>
          <div className="mb-3">
            <label htmlFor="rent" className="form-label">Rent Per Month</label>
            <input type="number" className="form-control" id="rent" required placeholder="BDT . tk" />
          </div>
          <select id="type" className="form-select" aria-label="Default select example">
            <option defaultValue="Property Type">Property Type</option>
            <option value="Studio">Studio</option>
            <option value="Micro Apartment">Micro Apartment</option>
            <option value="Loft">Loft</option>
            <option value="Duplex">Duplex</option>
            <option value="High-rise3">High-rise</option>
          </select>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary text-center">Submit</button>
          </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default addapartment

addapartment.getLayout = function getLayout(page) {
  return(
    <>
      <AuthLayout/>
      {page}
    </>
  )
}

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
                            <input type="text" className="form-control" id="room" placeholder="Number of Bed Room"  />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="bath" placeholder="Number of Bath"  />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="floor" placeholder="N-th Floor"  />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="rent" placeholder="Rent per month"  />
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

