import React from "react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";

// Login page
const Login = () => (
  <div className="login">
    <Navbar />
    <AuthModal onAuth={data => console.log(data)} />
  </div>
);

export default Login;

