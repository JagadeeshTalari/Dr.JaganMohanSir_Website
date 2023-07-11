import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import {ReactSession} from 'react-client-session';
import UserProfile from "./UserProfile";

import axios from "axios";
import "./Login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  //   function onChangeHander() {}
  function onLoginClickHandler() {
    console.log(email + "  " + password);
    axios
      .get("https://myservicesapi.com/api/login/login", {
        params: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        UserProfile.setName(email);
        // ReactSession.set('userEmail',email);
        // ReactSession.set('userName',response.data);
        if (response.data === "Admin") {
          // console.log('Success');
          navigate("/admin");
        } else {
          // console.log("Success");
          navigate("/member");
        }
      })
      .catch((response) => {
        console.log(response);
        alert("Invalid credentials");
        window.location.reload();
      });
  }
  function onClearClickHandler() {}
  return (
    <div className="login">
      <p className="LoginHeading">
        <b>LOGIN</b>
      </p>
      <div className="fields">
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login_field"
          placeholder="E-MAIL OR PHONE NUMBER"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password_field"
          placeholder="PASSWORD"
        />
        <button onClick={onClearClickHandler}>Clear</button>
        <button onClick={onLoginClickHandler}>Login</button>
      </div>
      <div></div>
    </div>
  );
}
export default Login;
