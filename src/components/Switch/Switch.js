import React, { Component } from "react";
import Switch from "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css';

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
        <span className="fs-3 fw-bold">{this.props.label}</span>
      </label>
    );
  }
}

export default SwitchExample;
