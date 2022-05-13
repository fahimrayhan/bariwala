import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function contact() {


  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch(
      '/api/contact/',
      {
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          msg: event.target.msg.value,
          receiver: "fahimrayhan786@gmail.com"
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    const results = await res.json()
    // console.log(results)
    toast(JSON.stringify(results.msg));
  }

  return (
    <div>
        <h1 className='text-center mt-5'>Contact Us</h1>
        <form className='mx-auto' style={{maxWidth:"460px"}} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name: </label>
            <input type="text" name="name" id="name" required className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email:</label>
            <input type="email" name="email" className='form-control' id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="msg">Write Your Message Here:</label>
            <textarea className="form-control" id="msg" required></textarea>
          </div>
          <div className="my-3 text-center">
            <button className='btn btn-primary '>Submit</button>
          </div>
          
        </form>
        <ToastContainer/>
    </div>
  )
}

export default contact