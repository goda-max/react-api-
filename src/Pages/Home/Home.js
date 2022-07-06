import React, { useState,useEffect } from 'react';
import Navbar from '../../component/layout/Navbarz';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Home = () => {

  const [details, getdetail] = useState([]);


let number=1

const Loaddetail= async()=>{
  try {
    const result = await axios.get("http://fixapi.chengegikonyo.com/api/locations");
    console.log(result.data.data);
    getdetail(result.data.data);

} catch (e) {
    console.log("no execution");
   
}

}


useEffect(()=>{
  // console.log("my Locations");
  Loaddetail()
},[]);


const deleteDetail = async id =>{
      await axios.delete(`http://fixapi.chengegikonyo.com/api/locations/${id}`);
       Loaddetail();
       
}
  return (
    <div>
          <Navbar/>
          <div className='heading'style={{marginLeft:"10%"}}>
            <h1>Home Page</h1>
          </div>

               <div className='add'style={{marginLeft:"12%"}}>
               <a href = '/Addlocation'class="btn btn-primary me-2">Add locations</a>
               </div>
          <div className='conta' style={{paddingTop:"2%",marginLeft:"10%"}}>
          <table class="table mb-2">
    <thead>
    <tr className="bg-dark text-white">
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
      </tr>
  </thead>
  <tbody >
   {/* mapping  */}
 
 
 
  {details.map((item,index)=>(


        <tr key={index} >  
           <th> </th>
           <td> {number++} </td>
           {/* <td> {item.id} </td> */}
           <td> {item.name} </td>  
                   <td> 
                   <a href ={ `/editlocation/${item.id}`}class="btn btn-primary me-2 ">Edit locations</a>
                  
                   <button type="button" class="btn btn-danger me-2 "onClick={()=>{deleteDetail(item.id)}}>Delete</button>
                   </td>
                   <td>
                  
                   </td>
            </tr>





          
        


) )}     
          
</tbody>
</table>

          </div>
    </div>
  )
}

export default Home;