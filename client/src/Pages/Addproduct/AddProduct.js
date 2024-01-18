import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, getProducts } from "../../JS/Actions/product";
import "./AddProduct.css";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };

  const handleADD = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newProduct.name);
    data.append("description", newProduct.description);
    data.append("price", newProduct.price);
    data.append("reference", newProduct.reference);
    data.append("imageURL", file);

    dispatch(addProduct(data));
    navigate("/products");
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>
        <p className="normed">ADD YOUR PRODUCT</p>
      </h1>
      <div className="frame2">
        <div className="frame33">
          <Form onSubmit={handleADD}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="forms">Product Image</Form.Label>
              <Form.Control
                encType="multipart/form-data"
                type="file"
                onChange={handlePhoto}
              />
              <Form.Label className="forms">Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                name="name"
                onChange={handleChange}
              />
              <Form.Label className="forms">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
              <Form.Label className="forms">Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price"
                name="price"
                onChange={handleChange}
              />
              <Form.Label className="forms">Reference</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reference"
                name="reference"
                onChange={handleChange}
              />
              <div className="button-container">
                <Button
                  className="button"
                  variant="light"
                  type="submit"
                  onClick={handleADD}
                >
                  <span className="button-text">Add New Product</span>
                </Button>
                </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
