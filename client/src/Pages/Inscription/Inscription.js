import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../JS/Actions/user';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import "./Inscription.css";

const Inscription = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create a New Customer Account</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="inscription">CREATE A NEW ACCOUNT</h1>
      {isAuth ? (
        navigate('/')
      ) : (
        <div className="cadre2">
          <div className="cadres">
            <Form onSubmit={handleUser}>
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
              type="submit"
              onClick={handleUser}
              style={{ color: '#fff', backgroundColor: '#000', padding:'5px', borderRadius:'4px', font:'Playfair Display', textDecoration: 'none' }}
            >
              <span className="boutontext">Create Account</span>
            </button>




              <hr />

              <Form.Text className="text-muted">
                Already have an account? <a href="/login" className='signin'>Sign In</a>
              </Form.Text>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inscription;
