import React, { Component } from 'react';

class TabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.funcFromAppb}
          className={this.props.activeIdFromApp === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.funcFromApp}
          className={this.props.activeIdFromApp === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.funcFromApp}
          className={this.props.activeIdFromApp === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
