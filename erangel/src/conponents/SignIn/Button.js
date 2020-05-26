import React from "react";
import { Component } from "react";
import styled from "styled-components";

class Button extends Component {
  render() {
    const Button = styled.div`
      margin-top: 40px;

      width: 460px;
      height: 60px;
      border-radius: 5px;
      border: none;
      background-color: #fab514;
      color: #ffffff;
      cursor: pointer;

      font-family: NanumSquareL;
      font-size: 17px;
      font-weight: bold;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `;
    return (
      <>
        <Button>{this.props.text.text}</Button>
      </>
    );
  }
}

export default Button;
