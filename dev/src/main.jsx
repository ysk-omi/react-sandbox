import React from "react";
import PropTypes from "prop-types";
import { createRoot } from "react-dom/client";

class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      val: "Heading 1",
    };
    this.handleInputChange = (e) => this._handleInputChange(e);
    this.handleButtonClick = () => this._handleButtonClick();
  }
  _handleInputChange(e) {
    this.setState({ val: e.target.value });
  }
  _handleButtonClick() {
    this.setState({ val: "" });
  }
  render() {
    let { val } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleInputChange} value={val} />
        <button type="button" onClick={this.handleButtonClick}>
          Clear
        </button>
        <h1>{val}</h1>
      </div>
    );
  }
}

class TextComponent extends React.Component {
  render() {
    let bool = true;
    return (
      <div>
        {(() => {
          if (bool) {
            return "Good Morning";
          } else {
            return "Good Evening";
          }
        })()}
      </div>
    );
  }
}

class PropsComponent extends React.Component {
  render() {
    const { target } = this.props;

    return (
      <div>
        <HeaderComponent></HeaderComponent>
        Hello {target}!<TextComponent></TextComponent>
      </div>
    );
  }
}

class Greeting extends React.Component {
  // コンポーネントが実際のDOMに追加された後に実行
  componentDidMount() {
    console.log(window.navigator);
  }
  render() {
    const { isBirthday } = this.props;

    return <div>{isBirthday ? "Happy Birthday" : "Hello how are you?"}</div>;
  }
}

Greeting.propTypes = {
  isBirthday: PropTypes.bool,
};

Greeting.defaultProps = {
  isBirthday: true,
};

const $app = document.getElementById("app");
const root = createRoot($app);
root.render(<Greeting />);
