import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../ContactUs/ContactUs";
import Products from "../Products/Products";
import "./Home.css";

const Home = ({ filtredProducts }) => {
  const myRef = useRef(null);


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aura</title>
        <link rel="canonical" />
      </Helmet>
      <h1>
        <p className="aura">Aura Jewelry</p>
      </h1>

      <div ref={myRef}>
        {<Products filtredProducts={filtredProducts} />}
        
      </div>

      <ContactUs />
    </div>
  );
};

export default Home;
