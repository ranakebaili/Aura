// OrderCard.jsx
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../JS/Actions/order";
import "./OrderCard.css"; 

const OrderCard = ({ newOrders }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOrder(newOrders._id));
    window.location.reload();
  };

  return (
    <div className="orderCards">
      <Card className="card">
        <Card.Body className="card-body">
          <Card.Text>
            <span className="forms">Product:</span>
            {newOrders.productname}
          </Card.Text>
          <Card.Text>
            <span className="forms">Reference:</span>
            {newOrders.reference}
          </Card.Text>
          <Card.Text>
            <span className="forms">Email:</span>
            {newOrders.email}
          </Card.Text>
          <Card.Text>
            <span className="forms">Phone:</span>
            {newOrders.phone}
          </Card.Text>
          <Card.Text>
            <span className="forms">Address:</span>
            {newOrders.adresse}
          </Card.Text>

          <button className="buttondelete" onClick={handleDelete}>
            Delete Order
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderCard;
