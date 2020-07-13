import React from "react";
import { Component } from "react";
import styled from "styled-components";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const InputText = styled.input`
      margin: 5px 0;
      padding: 0 20px;
      width: ${(props) => props.width || 380}px;
      height: ${(props) => props.height || 40}px;
      font-size: 14px;
      border-radius: 5px;
      border: solid 1px #a0a0a0;
      background-color: #ffffff;
      font-family: NanumSquare;
    `;

    return (
      <InputText
        placeholder={this.props.data.placeholder}
        width={this.props.data.width}
        height={this.props.data.height}
      ></InputText>
    );
  }
}

export default InputText;
