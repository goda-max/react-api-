import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactUs = () => {
  return (
    <div className='container w-75 mx- auto shadow p-5 '>
       
      
         <form >
  <div className="mb-3,ms-1,w-25 p-3 " >
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
     style={{marginLeft:"1%"}}
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3,w-25 p-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      style={{marginLeft:"1%"}}
      id="inputPassword2"
    />
  </div>
  <div className="mb-3 form-check,w-25, p-3">
    <input type="checkbox" className="form-check-input" id="exampleCheck" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>


    </div>
  )
}

export default ContactUs