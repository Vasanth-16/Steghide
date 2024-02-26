import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () =>{
    const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
    return(
        <div className="formContainer">
        <div className="formWrapper">
        <span Style={"display:inline-flex;justify-content:center;margin-right:25px;"}>  <img Style={"height:50px;width:50px; margin-top:2px;"} src="steg3.png"/>
        <span className="logo">StegHide</span></span>
            <span className="title">Log In</span>
            <form onSubmit={handleSubmit}>
                
                <input type="email" placeholder="E-mail"/>
                <input type="password"placeholder="Password"/>
                
                <button >Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account?  <Link to="/register">Register</Link></p>
        </div>
        </div>
    );

}
export default Login;