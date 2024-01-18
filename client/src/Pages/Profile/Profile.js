import React from "react";
import "./Profile.css";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaUserEdit } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PROFILE</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="Profile">PROFILE</h1>
      {isAuth ? (
        <div align="center" className="profileCard">
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <span className="forms">First Name:</span> {user && user.firstname}
              </Card.Text>

              <Card.Text>
                <span className="forms">Last Name:</span> {user && user.name}
              </Card.Text>
              <Card.Text>
                <span className="forms">Email:</span> {user && user.email}
              </Card.Text>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Edit</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <a
                    {...triggerHandler}
                    ref={ref}
                    onClick={() => navigate(`/edit/${user._id}`)}
                  >
                    <FaUserEdit className="editico" />
                  </a>
                )}
              </OverlayTrigger>

              <hr />
              <Card.Text>
                <span className="forms">Password </span>
              </Card.Text>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Edit</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <a
                    {...triggerHandler}
                    ref={ref}
                    onClick={() => navigate(`/editPassword/${user._id}`)}
                  >
                    <FaUserEdit className="editico" />
                  </a>
                )}
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </div>
      ) : isAuthAdmin ? (
        <div align="center" className="profileCard">
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <span className="forms">First Name:</span>{" "}
                {admin && admin.firstname}
              </Card.Text>

              <Card.Text>
                <span className="forms">Last Name:</span> {admin && admin.name}
              </Card.Text>
              <Card.Text>
                <span className="forms">Email:</span> {admin && admin.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
