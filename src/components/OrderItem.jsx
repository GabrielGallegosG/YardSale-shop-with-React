import React from "react";
import "../styles/OrderItem.scss"

const OrderItem = () => {
  return (
    <>
      <div className="order">
        <p>
          <span>04.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src="./icons/flechita.svg" alt="Arrow" />
      </div>
      <div className="order">
        <p>
          <span>04.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src="./icons/flechita.svg" alt="Arrow" />
      </div>
      <div className="order">
        <p>
          <span>04.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src="./icons/flechita.svg" alt="Arrow" />
      </div>
      <div className="order">
        <p>
          <span>04.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src="./icons/flechita.svg" alt="Arrow" />
      </div>
    </>
  );
};

export default OrderItem;
