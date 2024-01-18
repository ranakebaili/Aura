import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Helmet from "react-helmet";
import Error from "./Pages/Error/Error";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";
import AboutUs from "./Pages/About Us/AboutUs";
import Login from "./Pages/Login/Login";
import Inscription from "./Pages/Inscription/Inscription";
import InscriptionAdmin from "./Pages/Inscription/InscriptionAdmin";
import PrivacyPolicy from './Components/Footer/TermsOfService.js';
import TermsOfService from './Components/Footer/PrivacyPolicy.js';

import Profile from "./Pages/Profile/Profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/Actions/user";
import { currentAdmin } from "./JS/Actions/admin";
import UserList from "./Pages/UserList/UserList";
import EditProfile from "./Components/EdiPorfile/EditProfile";
import EditPassword from "./Components/EdiPorfile/EditPassword";
import AddProduct from "./Pages/Addproduct/AddProduct";
import Description from "./Pages/Description/Description.js";
import AddOrder from "./Pages/AddOrder/AddOrder";
import Order from "./Pages/Order/Order";

function App() {

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const listproducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const [inputSearch, setInputSearch] = useState("");
  const filtredProducts = listproducts.filter((product) =>
    product.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Products</title>
        <link rel="canonical" />
      </Helmet>

      <div className="v7">
        <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch} />
      </div>

      <div className="v8">
        <Routes>
          <Route exact path="/" element={<Home filtredProducts={filtredProducts}  />} />
          <Route path="/Products" element={<Products filtredProducts={filtredProducts} />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/*" element={<Error />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/accountCreate" element={<Inscription />} />
          <Route path="/Admin" element={<InscriptionAdmin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          <Route path="/login" element={<Login />} />


          {isAuth ? (
            <Route path="/edit/:id" element={<EditProfile />} />
          ) : (
            <Route path="/*" element={<Error />} />
          )}
          {isAuthAdmin ? (
            <Route path="/addproduct" element={<AddProduct />} />
          ) : null}
          {isAuthAdmin ? <Route path="/AllOrders" element={<Order />} /> : null}

          {isAuth ? (
            <Route path="/editPassword/:id" element={<EditPassword />} />
          ) : null}

          {isAuth ? (
            <Route path="/profile/:id" element={<Profile />} />
          ) : isAuthAdmin ? (
            <Route path="/profile/:id" element={<Profile />} />
          ) : (
            <Route exact path="/" element={<Home />} />
          )}

          {isAuthAdmin ? <Route path="/users" element={<UserList />} /> : null}

          <Route path="/addorder/:id" element={<AddOrder />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

