import React from "react";
import "../styles/ShoppingCartItem.scss";

const ShoppingCartItem = () => {
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Bike"
        />
      </figure>
      <p>Bike</p>
      <p>$340,00</p>
      <img src="./icons/icon_close.png" alt="close" />
    </div>
  );
};

export default ShoppingCartItem;
