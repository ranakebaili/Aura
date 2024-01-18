
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { edituserpassword } from "../../JS/Actions/user";
import "./EditPassword.css";

const EditPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const match = useMatch("/editPassword/:id");
  const user = useSelector((state) => state.userReducer.user);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    dispatch(edituserpassword(match.params.id, newUser));
    navigate(`/profile/${user._id}`);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ACCOUNT SETTINGS</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="Login">ACCOUNT SETTINGS</h1>

      <div className="frame2">
        <div className="frame5">
          <Form onSubmit={handleEdit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="formLabel">Old Password</Form.Label>

              <div>
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  placeholder="Old Password"
                  name="oldPassword"
                  onChange={handleChange}
                  value={newUser.oldPassword}
                />
              </div>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Label className="formLabel">New Password</Form.Label>
            <Form.Control
              type={passwordShown ? "text" : "password"}
              placeholder="New Password"
              name="password"
              onChange={handleChange}
              value={newUser.password}
            />
            <Form.Text className="text-muted"></Form.Text>

            <div className="update" align="center">
              <Button
                variant="secondary"
                onClick={() => navigate(`/profile/${user._id}`)}
              >
                <span className="buttonText">Cancel</span>
              </Button>
              <Button
                className="editButton"
                variant="light"
                type="submit"
                onClick={handleEdit}
              >
                <span onClick={handleEdit} className="buttonText">
                  Update
                </span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
