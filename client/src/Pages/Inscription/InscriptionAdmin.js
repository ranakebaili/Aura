// Inscription.jsx
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerAdmin } from '../../JS/Actions/admin';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import "./Inscription.css";

const InscriptionAdmin = () => {
  const [newAdmin, setNewAdmin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthAdmin = useSelector((state) => state.userReducer.isAuthAdmin);

  const handleChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  const handleAdmin = (e) => {
    e.preventDefault();
    newAdmin.isAdmin = true;
    dispatch(registerAdmin(newAdmin));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CREATE A NEW Admin ACCOUNT</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="inscription">CREATE A NEW ADMIN ACCOUNT</h1>
      {isAuthAdmin ? (
        navigate('/')
      ) : (
        <div className="cadre2">
          <div className="cadres">
            <Form onSubmit={handleAdmin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="forms">First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name="firstname" onChange={handleChange} />

                <Form.Label className="forms">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name="name" onChange={handleChange} />

                <Form.Label className="forms">Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="forms">Password</Form.Label>
                {passwordShown ? (
                  <AiOutlineEye className="eye-icon" onClick={togglePassword} />
                ) : (
                  <AiOutlineEyeInvisible className="eye-icon" onClick={togglePassword} />
                )}

                <Form.Control type={passwordShown ? 'text' : 'password'} placeholder="Password" name="password" onChange={handleChange} />
              </Form.Group>

              <button
                className="bouton bg-dark"
                type="submit"
                onClick={handleAdmin}
                style={{ color: '#fff', backgroundColor: '#000', padding:'5px', borderRadius:'4px', font:'Playfair Display', textDecoration: 'none' }}
                >
                <span className="boutontext">Create Account</span>
              </button>

              <hr />


              <Form.Text className="text-muted">
                Already have an account? <a href="/login"  className='signin'>Sign In</a>
              </Form.Text>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InscriptionAdmin;
