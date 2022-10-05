import React from "react";
import ItemList from "./ItemList.jsx";
import Cart from "./Cart.jsx";

const Container = (props) => {
  const { listItems, cartItems, addToCart, removeFromCart } = props;

  return (
    <div>
      <div className="ItemListArea">
        <ItemList items={listItems} addToCart={addToCart}></ItemList>
      </div>
      <div className="CartArea">
        <Cart items={cartItems} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Container;
