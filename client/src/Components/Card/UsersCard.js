import React from 'react';
import { Card } from 'react-bootstrap';
import './UsersCard.css';

const UsersCard = ({ user }) => {
  return (
    <div>
      <div align='center' className='profileCard'>
        <Card style={{ width: '14rem' }}>

          <Card.Body>

            <Card.Title>-Profile-</Card.Title>

            <Card.Text>
              <span className='formLabel'>First Name:</span> {user.firstname}
            </Card.Text>

            <Card.Text>
              <span className='formLabel'>Last Name:</span> {user.name}
            </Card.Text>

            <Card.Text>
              <span className='formLabel'>Email:</span> {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UsersCard;
