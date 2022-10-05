import React from "react";
import ItemList from "./ItemList.jsx";
import Cart from "./Cart.jsx";
import PropTypes from "prop-types";

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

Container.propTypes = {
  listItems: PropTypes.array,
  cartItems: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};
