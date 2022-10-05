import React from "react";
import Item from "./Item.jsx";

const Cart = (props) => {
  const { items, removeFromCart } = props;

  let Content;

  const getSum = () => {
    let price = 0;
    for (const item of items) {
      price += item.price;
    }
    return price;
  };

  if (items.length > 0) {
    Content = (
      <div>
        {items.map((item, index) => {
          return (
            <Item
              {...item}
              key={index}
              onClickBtn={() => removeFromCart(index)}
              btnLabel="カートから削除"
            ></Item>
          );
        })}
        <div>
          計{items.length}点 {getSum()}円
        </div>
      </div>
    );
  } else {
    Content = <span>カートに商品がありません</span>;
  }

  return (
    <div>
      <div>{Content}</div>
    </div>
  );
};

export default Cart;
