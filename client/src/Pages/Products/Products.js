import React, { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../JS/Actions/product";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Button } from "react-bootstrap";

const Products = ({ filtredProducts }) => {
  const dispatch = useDispatch();

  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div >
      <h1 className="Produit">Our Jewelry</h1>
      <div>
        {isAuthAdmin && (
          <div className="ppp">
          <Button className="v33" variant="light" href="/addproduct">
            <span className="v3">Add a product</span>
          </Button>
          </div>
        )}
        <div className="productcontainer12">
          <div className="productlist">
            {filtredProducts.length > 0 ? (
              filtredProducts.map((el) => (
                <ProductCard product={el} key={el.id} />
              ))
            ) : (
              <p>No results</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
