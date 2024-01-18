import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { edituser } from '../../JS/Actions/user';

import './EditProfile.css';

const EditProfile = () => {

  const userToEdit = useSelector(state => state.userReducer.user);

  const match = useMatch("/edit/:id");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const user = useSelector((state) => state.userReducer.user);

  const handleEdit = () => {
    dispatch(edituser(match.params.id, newUser));
    navigate(`/profile/${user._id}`);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ACCOUNT SETTINGS</title>
        <link rel="canonical" />
      </Helmet>
      <h1 className='Login'>ACCOUNT SETTINGS</h1>
      <div className='frame2'>
        <div className='frame7'>
          <Form onSubmit={handleEdit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='formLabel'>First Name</Form.Label>
              <Form.Control type="text" placeholder={`${userToEdit.firstname}`} name='firstname' onChange={handleChange} value={newUser.firstname} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Label className='formLabel'>Last Name</Form.Label>
            <Form.Control type="text" placeholder={`${userToEdit.name}`} name='name' onChange={handleChange} value={newUser.name} />
            <Form.Text className="text-muted"></Form.Text>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='formLabel'>Email</Form.Label>
              <div>
                <Form.Control type="email" placeholder={`${userToEdit.email}`} name='email' onChange={handleChange} value={newUser.email} />
              </div>
            </Form.Group>
            <div className='update'>
              <Button variant="secondary" onClick={() => navigate(`/profile/${userToEdit._id}`)}>
                <span>Cancel</span>
              </Button>
              <Button onClick={handleEdit} className='editButton' variant="light" type="submit">
                <span className='buttonText'>Update →</span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
