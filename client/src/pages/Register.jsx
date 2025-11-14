import React from "react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";

// Register page
const Register = () => (
  <div className="register">
    <Navbar />
    <AuthModal onAuth={data => console.log(data)} />
  </div>
);

export default Register;

