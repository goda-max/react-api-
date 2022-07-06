import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Addlocatiion from './Pages/Addlocation/Addlocation';
import Editlocation from './Pages/Editlocation/Editlocation';


import axios from 'axios';
import './App.css';
import Addlocation from './Pages/Addlocation/Addlocation';


axios.defaults.withCredentials = false;

axios.defaults.baseURL = "http://fixapi.chengegikonyo.com";
axios.defaults.headers.post["Content-Type"] = 'application/json';
axios.defaults.headers.post["Accept"] = 'application/json';

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

function App() {
  return (
      <Router>
         <Routes>
            <Route exact path="/home" element={< Home />}></Route>
          
           <Route exact path="/login" element={<Login />}></Route>
           <Route exact path="/about" element={<About />}></Route>
           <Route exact path="/contactus" element={<ContactUs/>}></Route>
           <Route exact path="/addlocation" element={<Addlocation />}></Route>
           <Route exact path="/editlocation/:id" element={<Editlocation />}></Route>
           
            
        </Routes>   
        </Router>
  );
}

export default App;
 