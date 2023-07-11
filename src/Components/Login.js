import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
//import {ReactSession} from 'react-client-session';
import UserProfile from './UserProfile';

import axios from 'axios';
import './Login.css';
function Login()
{
   const[password,setPassword]=useState('');
  const[email,setEmail]=useState('');
  const navigate = useNavigate();
    function onChangeHander()
    {

    }
    function onLoginClickHandler()
    {
      console.log(email + '  ' + password);
       axios.get('https://myservicesapi.com/api/login/login',{params:{
            
             email: email,
             password: password
           
         }})
         .then((response)=>{
           UserProfile.setName(email);
          // ReactSession.set('userEmail',email);
          // ReactSession.set('userName',response.data);
           if(response.data==='Admin')
           {
             // console.log('Success');
             navigate('/admin');
           }
           else
           {
             // console.log("Success");
             navigate('/member');
           }
         })
         .catch((response)=>{
           console.log(response)
           alert("Invalid credentials")
           window.location.reload();
         })
     
    }
    function onClearClickHandler()
    {

    }
    return(
        <div class="centering">
        <table>
           <tr>
              <td>User Name</td>
              <td>
                <input type="text"
                       name="email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}></input>
              </td>
           </tr> 
           <tr>
              <td>Password</td>
              <td>
              <input type="password"
                     name="password"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}></input>
              </td>
           </tr> 

           <tr>
              <td><button onClick={onClearClickHandler}>Clear</button></td>
              <td><button onClick={onLoginClickHandler}>Login</button></td>
           </tr> 
           <tr>
            <td colSpan={2}>Message</td>
           </tr>
        </table>
        </div>
    );
}
export default Login;