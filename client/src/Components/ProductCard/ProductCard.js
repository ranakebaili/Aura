// ProductCard.jsx
import React from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../JS/Actions/product";
import { useNavigate } from "react-router-dom";
import { BsCartPlus } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product._id));
    window.location.reload();
  };

  return (
    <div className="containerrr">
      <img
        className="product-image"
        src={`uploads/${product.imageURL}`}
        alt={product.name}
      />
      <div className="overlay">
        <div className="items head">
          <h1 className="card-title">{product.name}</h1>
        </div>
        <div className="items price">
          <p className="new">{product.price} $</p>
        </div>
        <p
          className="learn-more"
          onClick={() => navigate(`/description/${product._id}`)}
        >
          Learn More
        </p>
        <div className="items cart">
          <i className="fa fa-shopping-cart"></i>
          {!isAuthAdmin ?
          <button
            className="order-btn"
            onClick={() => navigate(`/addorder/${product._id}`)}
          >
            Place an Order <BsCartPlus className="cart-icon" />
          </button> 
          : null}
        </div>
        {isAuthAdmin ? (
          <button className="delete-btn" onClick={handleDelete}>
            <FaTrashAlt className="trash-icon" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
