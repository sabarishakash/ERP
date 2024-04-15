import axios from "axios";
import React, { useState } from "react";
// import { login_url } from "./URL/url";
import "./login.css";
import { login_url } from "../src/URL/url";
import{Link} from "react-router-dom";
import e from "cors";
const Login = ({ onLoginSuccess }) => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const[collect,setCollect]=useState([]);

  const login_data = async (e) => {
    e.preventDefault()
    
    await axios
      .post(login_url, {
        name,
        password,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "login success") {
          onLoginSuccess();
        } else {
          alert("Incorrect UserName or Password");
        }
      });
  };

  return (
    
    // <div className="maindiv">
    //   <h2>Admin Login</h2>
    //   <form className="mainform">
    //     <label className="lab11"> UserName</label>
    //     <input
    //       //   type="text"
    //       className="maininput1"
    //       placeholder="UserName"
    //       onChange={(e) => setname(e.target.value)}
    //     />
    //     <br />
    //     <label className="lab11"> Password</label>
    //     <input
    //       //   type="text"
    //       className="maininput1"
    //       placeholder="Password"
    //       onChange={(e) => setpassword(e.target.value)}
    //     />
    //   </form>
    //   <br></br>
    //   <br></br>
    //   <button className="mainbutton" onClick={login_data}>
    //     Login
    //   </button>
    //   <div className="collect">{collect}</div>
    //   <div className="link">
    //     <Link to="/App">Forget Password</Link>
    //   </div>
    // </div>
    <>
  <div class="container1">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input onChange={(e)=>setname(e.target.value)} type="text" class="login__input" placeholder="User name / Email"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input onChange={(e)=>setpassword(e.target.value)} type="password" class="login__input" placeholder="Password"/>
				</div>
				<button onClick={login_data} class="login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>		
        
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
       {/* <div className="collect">{collect}</div>
       <div className="link">
         <Link to="/App">Forget Password</Link>
       </div> */}
           
        
      
   
    </>
  )}
    
  


export default Login;
