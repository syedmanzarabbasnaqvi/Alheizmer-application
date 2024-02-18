import React, { useState } from 'react';
import Image from "../assets/alheiz (1).jpg"

function Login() {
  // Define state variables for form inputs and errors
  const [userNameOrEmail, setUserNameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = async () => {
    // Basic form validation
    const errors = {};

    if (!userNameOrEmail.trim()) {
      errors.userNameOrEmail = 'Username or Email is required';
      alert("Username or Email is required")
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      alert("Password is required")
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If no errors, proceed with form submission logic
    const userData = {
      username: userNameOrEmail,
      password: password
    };

    console.log(userData);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/doctor/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      localStorage.setItem("auth-token", data);
      window.location.pathname = "/"; // Redirect or perform other actions after successful login
      console.log(data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <section className="h-100 container-fluid Login mt-5">
      <div className="container mb-5" style={{ borderRadius: '0.7rem', borderColor: 'transparent' }}>
        <div className="row">
          <div className="col-sm-5 bg-dark order-lg-0 order-1">
          <div className="login-title-frame">
              <h1 className="h1 text-light">Login</h1>
              <p className="h6 text-light">Enter your account details</p>
            </div>
            <form className="login">
              {/* ... Your existing JSX code ... */}
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  style={{ color: '#fff!important' }}
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                  value={userNameOrEmail}
                  onChange={(e) => setUserNameOrEmail(e.target.value)}
                />
                {errors.userNameOrEmail && <span className="error-message">{errors.userNameOrEmail}</span>}
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  style={{ color: '#fff!important' }}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <button onClick={handleSubmit} className="login_button btn mt-5 mb-5 py-2" >Login</button>
              <a href="" style={{ color: 'orange' }}>forgot password ?</a>
              <div className="my-5 py-5">
                <a href="" style={{ color: 'orange' }}>If you don't have an account, Sign up ?</a>
              </div>
            </form>
          </div>
          {/* ... Your existing JSX code ... */}
          <div className="col-sm-7 bg-white position-relative order-lg-1 order-0">
            <h1 className="h1 side2title">Welcome to <span style={{ fontWeight: 'bold' }}>Alzheimer's Detection portal</span></h1>
            <p className="side2para">Login to access your account</p>
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src={Image} alt="" />
            </div>
            <div className="screen__background">
              <span className="dot"></span>
              <span className="dot1"></span>
              <span className="dot2"></span>
              <span className="dot3"></span>
              <span className="dot4"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
