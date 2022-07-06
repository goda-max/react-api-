import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useHistory} from "react-router-dom";
import axios from 'axios';
const Addlocation = () => {
//  let history=useHistory();


  // const [location,setLocation]=useState({
  //   name:[""],

  // });

  const [location, setLocation] = useState({
    name:"",
  })
    
  
  const {name}=location;
 
  const onInputChange= e =>{
      setLocation({...location,[e.target.name]:e.target.value});
  }


  

const onSubmit= async e =>{
    e.preventDefault();
      await axios.post("http://fixapi.chengegikonyo.com/api/admin/Super-Admin/locations",{'name':["kisumu","meru","mombasa"]})
      console.log(location, "show");
    // history.push("/");
}



  return (
    <div className='container'>
      < div className='w-75 mx- auto shadow p-5'>
          <h2 className='text-center mb-4'> Add locations</h2>
             <form onSubmit={e=>onSubmit(e)} >
                <div className='form-group'>
                   <input
                     type="text sm"
                    style={{marginLeft:"-1%"}}
                     placeholder='Enter your name'
                     onChange={e=>onInputChange(e)}
                      name="name"
                      value={name}
                   
                   ></input>
                          
                </div>
                <button type="button " class="btn btn-primary mt-2">Addlocation</button>
             </form>

      </div>


    </div>
  )
}

export default Addlocation;