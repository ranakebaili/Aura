import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { addOrder } from "../../JS/Actions/order";
import { getOneProduct } from "../../JS/Actions/product";
import { Form } from "react-bootstrap";
import { BiCart } from 'react-icons/bi'; 
import "./AddOrder.css";

const AddOrder = () => {
  const match = useMatch("/addorder/:id");

  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  )
  useEffect(() => {
    dispatch(getOneProduct(match.params.id))
  })
  
  const [newOrder, setNewOrder] = useState({
    email: "",
    productname: "",
    reference:"",
    adresse: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    dispatch(getOneProduct(match.params.id));
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    newOrder.productname=`${productToGet.name}`
    newOrder.reference=`${productToGet.reference}`

    dispatch(addOrder(newOrder, match.params.id));
    navigate("/");
  };

  return (
    <div>
      <h1>
        <p className="normed">PLACE AN ORDER</p>
      </h1>

      <div className="commande-container">
        <div className="orderCard">
          <p className="formsss">{productToGet.name} </p>
          <p className="forms"> Reference: {productToGet.reference} </p>
          <p className="forms"> Price: {productToGet.price} $ </p>

          <div className="inputs">
            <div className="input-order">
              <p className="forms">Email:</p>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={newOrder.email}
              />
            </div>
            <div className="input-order">
              <p className="forms">Phone Number:</p>
              <Form.Control
                type="number"
                name="phone"
                onChange={handleChange}
                value={newOrder.phone}
              />
            </div>
            <div className="input-order">
              <p className="forms">Address:</p>
              <Form.Control
                type="text"
                name="adresse"
                onChange={handleChange}
                value={newOrder.address}
              />
            </div>

            <div className="btn66">
              <hr />
              <div
                className="button5"
                onClick={isAuth ? handleOrder : navigate("/login")}              >
                Place Order <BiCart className="cart" size={20} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
