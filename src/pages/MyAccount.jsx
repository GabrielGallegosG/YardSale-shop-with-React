import React from "react";
import "../styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">Gabriel Gallegos</p>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <p className="value">gabrielgallegos@example.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">************</p>
          </div>
          <input
            type="submit"
            defaultValue="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
