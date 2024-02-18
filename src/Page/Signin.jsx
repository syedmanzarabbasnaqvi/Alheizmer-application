import React, { useState } from 'react';
import Image from "../assets/alheiz (1).jpg"

function SignUp() {
  // Define state variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = async () => {
    // Basic form validation
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
      alert('First Name is required')
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
      alert('Last Name is required')
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email format';
      alert('Invalid email format')
    }

    if (!phone.trim()) {
      errors.phone = 'Phone is required';
      alert('Phone is required')
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      alert('Password is required')
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      alert('Passwords do not match')
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If no errors, proceed with form submission logic
    const user = {
      username: email,
      password: password,
      firstName,
      lastName,
      phone
    };

    console.log(user);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/doctor/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();
      console.log(data);

      // Redirect or perform other actions after successful submission
      window.location.pathname = "/login";
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };


  return (
    <section className="h-100 container-fluid Login mt-5">
      <div className="container mb-5" style={{ borderRadius: '0.7rem', borderColor: 'transparent' }}>
        <div className="row">
          <div className="col-sm-5 bg-dark order-lg-0 order-1" style={{ borderTopLeftRadius: '0.7rem', borderBottomLeftRadius: '0.7rem' }}>
            <div className="login-title-frame">
              <h1 className="h1 text-light">Sign Up</h1>
              <p className="h6 text-light">Enter your details in order to make an account</p>
            </div>
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-envelope"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-phone"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="password"
                  className="login__input"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
             
            </form>
            <button onClick={handleSubmit} className="login_button btn mt-5 py-2" >Sign up</button>
            <div className="my-5 py-5">
              <b>
                <a href="" style={{ color: 'orange' }}>Login If already Sign up</a>
              </b>
            </div>
          </div>
          <div className="col-sm-7 bg-white position-relative order-lg-1 order-0" style={{ borderTopRightRadius: '0.7rem', borderBottomRightRadius: '0.7rem' }}>
            <h1 className="h1 side2title">Welcome to <span style={{ fontWeight: 10 }}>Alzheimer's Detection portal</span></h1>
            <p className="side2para">Login to access your account</p>
            <div className="d-flex justify-content-center align-items-center align-content-center mt-5 pt-5">
              <img className="mt-5" width="" src={Image} alt="" />
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

export default SignUp;
