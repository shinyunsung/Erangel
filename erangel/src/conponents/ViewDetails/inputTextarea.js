import React from "react";
import { Component } from "react";
import styled from "styled-components";

class InputTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const InputTextarea = styled.textarea`
      margin: 5px 0;
      padding: 20px 20px;
      width: ${(props) => props.width || 380}px;
      height: ${(props) => props.height || 40}px;
      font-size: 14px;
      border-radius: 5px;
      border: solid 1px #a0a0a0;
      background-color: #ffffff;
      font-family: NanumSquare;
      resize: none;
      line-height: 20px;
    `;

    return (
      <div>
        <InputTextarea
          placeholder={this.props.data.placeholder}
          width={this.props.data.width}
          height={this.props.data.height}
        ></InputTextarea>
        <div style={{ textAlign: "right" }}>
          <span id="count">0</span>/<span id="max-count">0</span>
        </div>
      </div>
    );
  }
}

export default InputTextarea;
