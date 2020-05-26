import React from "react";
import { Component } from "react";
import styled from "styled-components";

class ErrorMessage extends Component {
  render() {
    const Message = styled.h1`
      font-family: NanumSquareL;
      font-size: 12px;
      color: #fc6565;
      text-align: right;
    `;
    return (
      <>
        <Message>{this.props.data.message}</Message>
      </>
    );
  }
}

export default ErrorMessage;
