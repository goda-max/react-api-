import './Login.css';
import profile from "../../images/lock.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import view from "../../images/login.jpg";
import { useNavigate} from "react-router-dom";
import { Oval } from 'react-loader-spinner';
import React, { useState,useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
   
    const [successResponse,setSuccessResponse]=useState("");
    const [serverError, setServerError] = useState("")
    const [isSub, setsub] = useState(false);
    const [errors, seterrors] = useState({});
  
   
   
   
    const [ loginInput, setLogin] = useState ({
        email: '',
        password: '',
       
    });

    
    const handleInput = (e) =>{
        e.persist();
    
        setLogin({...loginInput, [e.target.name]: e.target.value});
        console.log(loginInput);
    };
        
    const loginSubmit = (e) => {
        e.preventDefault();
    // validation
    seterrors(validate(loginInput));
    setsub(true);
       
    
        const data ={
            email: loginInput.email,
            password: loginInput.password,
        }
    
        setLoading(true);
   
        axios.post(`api/login`, data) .then(res =>{
    if(res.status === 200)
    {
        setLoading(false)
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", JSON.stringify(res.data));

        setSuccessResponse("you have been logged in successfully.");
        setTimeout(() => {
          setSuccessResponse("")
          navigate('/home');
        }, 3000)

      

    }else{
        alert("Incorrect email or password");

    }

}).catch(res =>{
  
 
    setLoading(false);
    setServerError("incorrect email or password")
    setTimeout(()=>{
      setServerError("")
    },2000)

  // alert("Invalid credentials");
});

}


// validation error


useEffect(()=>{

  // console.log(errors);

    if(Object.keys(errors).length === 0 && isSub){
      // console.log(loginInput);
    }
  },[errors])
  
  
  const validate = ( x  ) =>{ 
  
    const err = {};
    const regrex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
  
    if(!x.email){
      err.email =" Email is required"
    }else if( !regrex.test(x.email) )
    {
      err.email =" inappropriate email format " 
    }
    if(!x.password){
      err.password =" password is required";
    }else if(x.password.length < 8 )
    {
      err.password =" Must be more than 8 characters"
    }
  
    return err; 
  }




  return (
<div>
 



    <div className="main">
    <div style={{marginLeft:"30%",marginTop:"-3%",position:"fixed", zIndex:"2"}}>
                         {successResponse && (
                          <div 
                             style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#28a745",marginLeft:"20%",
                             borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                            {successResponse}
                            </div>
          // success response
     )}

                  

                                   {serverError && (
                                     <div 
                                    style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#ED4337",
                                    borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                    {serverError}
                                    </div>
                                      
                                 )}
                          </div>
                          {/* server error response  */}
         

 


        <div className='view' style={{marginRight:"3%",marginTop:"1%",marginBottom:"2%",}}>
            <div className='viewz'style={{width:"50%"}} >
            <img src={view} />
            </div>
        </div>

     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1> Admin Login Page</h1>
           
              <form action="" onSubmit={loginSubmit}  style={{ float: "left", marginLeft: "8%" }}>

               <div>
             <img src={email} alt="email" className="email"/>
             <input onChange={handleInput} value={loginInput.email} name='email' placeholder="email" className="name"/>
             <p style={{color:"red"}}>{errors.email}</p>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type='password'onChange={handleInput} value={loginInput.password} name='password' placeholder="password" className="name"/>
             <p style={{color:"red"}}>{errors.password}</p>
             
           </div>
           
{/* login */}
          <div className="login-button">
          {loading&&(
   <button type="submit" style={{
    width: "200px", borderRadius: "15px", marginTop: "0px", paddingtop: "5px", paddingBottom: "5px"
    , border: "1px solid white", background: "#f8b609", color: "white", marginBottom: "10px"
}}>    
{/* spinner */}
                 <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                 <div style={{display:"flex", flexDirection:"row"}}>
                 <Oval  height="20"
                  width="20"
                  color='white'
                   ariaLabel='loading'/>
             <span style={{fontSize:"20px"}}>Logging In...</span>
        </div>
    </div>
</button>
)}





{!loading && (
    
    <button type="submit" style={{
      width: "200px", borderRadius: "15px", marginTop: "0px", paddingtop: "5px", paddingBottom: "5px"
      , border: "1px solid white", background: "#f8b609", color: "white", marginBottom: "10px"
  }}>Login</button>

)}



</div>




 </form>

</div>
          
           
          
           
 
         </div>
        </div>


</div>

     </div>
     
    
  );
}

export default Login;