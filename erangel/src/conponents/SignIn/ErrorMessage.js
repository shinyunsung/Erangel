import React from "react";
import { Component } from "react";
import styled from "styled-components";

class ErrorMessage extends Component {
  render() {
    const Message = styled.h1`
      height: 10px;
      font-family: NanumSquareL;
      font-size: 12px;
      color: #fc6565;
      text-align: right;
    `;
    return (
      <>
        <Message>{this.props.errMessageList[0].message}</Message>
      </>
    );
  }
}

export default ErrorMessage;
