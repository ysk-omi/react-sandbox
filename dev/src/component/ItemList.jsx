import React from "react";
import Item from "./Item.jsx";

const ItemList = (props) => {
  const { items, addToCart } = props;
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Item
              {...item}
              onClickBtn={() => addToCart(item)}
              btnLabel="カートに入れる"
            ></Item>
            ;
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
