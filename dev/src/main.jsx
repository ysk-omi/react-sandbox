import React from 'react';
import { createRoot } from 'react-dom/client';

class HeaderComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 'Heading 1'
    }
    this.handleInputChange = (e) => this._handleInputChange(e)
    this.handleButtonClick = () => this._handleButtonClick()
  }
  _handleInputChange(e) {
    this.setState({val: e.target.value})
  }
  _handleButtonClick() {
    this.setState({val: ''})
  }
  render() {
    let { val } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={val}
        />
        <button
          type="button"
          onClick={this.handleButtonClick}
        >Clear</button>
        <h1>
          {val}
        </h1>
      </div>
    )
  }
}

class PropsComponent extends React.Component {
  render() {
    const { target } = this.props;

    return (
      <div>
        <HeaderComponent></HeaderComponent>
        Hello {target}!
      </div>
    );
  }
}

const $app = document.getElementById('app');
const root = createRoot($app)
root.render(<PropsComponent target="Every one" />);