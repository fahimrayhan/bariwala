import React from 'react'

function contact() {
  return (
    <div>
        <h1 className='text-center mt-5'>Contact Us</h1>
        <form className='mx-auto' style={{maxWidth:"460px"}}>
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
            <textarea className="form-control"></textarea>
          </div>
          <div className="my-3 text-center">
            <button className='btn btn-primary '>Submit</button>
          </div>
          
        </form>
    </div>
  )
}

export default contact