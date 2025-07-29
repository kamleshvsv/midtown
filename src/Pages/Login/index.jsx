import React from "react";
import "./../../Assets/CSS/login.css";
import loginBg from "./../../Assets/img/login-bg.jpg";
import loginIcon from "./../../Assets/img/logo/logo1_transparent.png"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  return (
    <>
    
      <title>Login | Midtown RX</title>
      
    <section
      className="login-page"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="login-form">
        <img
          src={loginIcon}
          onClick={() => navigate("/")}
          alt="logo"
          style={{cursor:"pointer"}}
          className="login-logo"
        />
        <h2>Log In</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
               <button type="submit" className="submit-btn">
          Log In
        </button>
        <a className="forgot-password" href="#">
          Forgot your password?
        </a>
        <a className="sign-up" href="#">
          Don’t have an account? <span>Sign Up</span>
        </a>
      </form>
    </section>
    </>
  );
};

export default Login;
