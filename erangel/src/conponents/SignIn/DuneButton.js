import React from "react";
import { Component } from "react";
import styled from "styled-components";

class DuneButton extends Component {
  render() {
    const InputButton = styled.input`
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
        <InputButton type="submit" value={this.props.Buttontext}></InputButton>
      </>
    );
  }
}

export default DuneButton;
