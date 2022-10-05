import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  const { title, author, desc, price, onClickBtn, btnLabel } = props;
  return (
    <div>
      <h2 className="ItemTitle">{title}</h2>
      <div className="author">著: {author}</div>
      <p className="description">{desc}</p>
      <p className="price">{price}円</p>
      <div>
        <button onClick={onClickBtn}>{btnLabel}</button>
      </div>
    </div>
  );
};

export default Item;

Item.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClickBtn: PropTypes.func.isRequired,
  btnLabel: PropTypes.node.isRequired,
};
