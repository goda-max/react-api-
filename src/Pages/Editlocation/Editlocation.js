import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useHistory} from "react-router-dom";
import axios from 'axios';
import  {useParams,useHistory} from "react-router-dom";

const Editlocation = () => {
  // let history =useHistory();
  const {id}=useParams();
 
  const [loka,setLoka]=useState({
    name:"",

  });

  
  const {name}=loka;
  const onInputChange= e =>{
      setLoka({...loka,[e.target.name]:e.target.value});
  };
 
 



const onSubmit= async (e,id) =>{
    e.preventDefault();
      await axios.put(`http://fixapi.chengegikonyo.com/api/locations/${id}`,{name});
      console.log(id,"id");

    // history.push("/");
}

const Loaddetail= async()=>{
  const result = await axios.get(`http://fixapi.chengegikonyo.com/api/locations/${id}`);
  console.log("res",result);
 setLoka(result.data.data);
  // console.log(result.data.data,"initial");
}
useEffect(()=>{
  // console.log("my Locations");
  Loaddetail();
},[]);
  
  return (
    <div className='container'>
      < div className='w-75 mx- auto shadow p-5'>
          <h2 className='text-center mb-4'> Edit Location</h2>
             <form onSubmit={e=>onSubmit(e,id)} >
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
                <button type="button " class="btn btn-primary mt-2">UpdateLocation</button>
             </form>

      </div>


    </div>
  )
}

export default Editlocation