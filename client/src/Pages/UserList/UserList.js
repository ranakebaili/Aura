import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import UsersCard from "../../Components/Card/UsersCard";
import { getallusers } from "../../JS/Actions/admin";
import "./UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const listusers = useSelector((state) => state.adminReducer.listusers);

  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Users</title>
        <link rel="canonical" />
      </Helmet>
      <h1 className="Profile">User List</h1>
      <div className="Userlist">
        {listusers.map((el) => (
          <UsersCard className="UsersCard" user={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
