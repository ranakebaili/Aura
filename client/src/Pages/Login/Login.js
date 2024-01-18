import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../JS/Actions/user";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
import "./Login.css";
import { Helmet } from "react-helmet";
import { loginAdmin } from "../../JS/Actions/admin";

const Login = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user)) && dispatch(loginAdmin(admin));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CLIENT LOGIN</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="Loginn">LOGIN</h1>
      {isAuth ? (
        navigate("/")
      ) : isAuthAdmin ? (
        navigate("/")
      ) : (
        <div className="cadre2">
          <div className="cadre">
            <Form onSubmit={handleUser}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="forms">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="forms">Password</Form.Label>
                  {passwordShown ? (
                    <AiOutlineEyeInvisible
                      onClick={togglePassword}
                      className="eye"
                      alt="show"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={togglePassword}
                      className="eye"
                      alt="hide"
                    />
                  )}
                  <Form.Control
                    type={passwordShown ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
              </Form.Group>
              <button
              type="submit"
              onClick={handleUser}
              style={{ color: '#fff', backgroundColor: '#000', padding:'5px', borderRadius:'4px', font:'Playfair Display', textDecoration: 'none' }}
            >
              <span className="boutontext">Login</span>
            </button>
              <hr />
              <Form.Text className="text-muted">
                Don't have an account? <a href="/accountCreate" className='signin'>Create one</a>
              </Form.Text>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
