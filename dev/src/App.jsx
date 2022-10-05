import React from "react";
import Header from "./component/Header.jsx";
import Container from "./component/Container.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };

    this._addToCart = this._addToCart.bind(this);
    this._removeFromCart = this._removeFromCart.bind(this);
  }
  render() {
    const { listItems } = this.props;
    const { cartItems } = this.state;
    return (
      <div>
        <Header></Header>
        <Container
          listItems={listItems}
          cartItems={cartItems}
          addToCart={this._addToCart}
          removeFromCart={this._removeFromCart}
        ></Container>
      </div>
    );
  }
  _addToCart(item) {
    let newCartItems = this.state.cartItems.slice();
    newCartItems.push(item);
    this.setState({ cartItems: newCartItems });
  }
  _removeFromCart(index) {
    let newCartItems = this.state.cartItems.slice();
    newCartItems.splice(index, 1);
    this.setState({ cartItems: newCartItems });
  }
}

export default App;
