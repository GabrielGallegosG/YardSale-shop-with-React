import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateANewPassword from "../pages/CreateANewPassword";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";
import SendEmail from "../pages/SendEmail";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" component={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/send-email" component={<SendEmail />} />
          <Route
            path="/create-a-new-password"
            element={<CreateANewPassword />}
          />
          <Route path="/account" component={<MyAccount />} />
          <Route path="/signin" component={<CreateAccount />} />
          <Route path="/checkout" component={<Checkout />} />
          <Route path="/orders" component={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
