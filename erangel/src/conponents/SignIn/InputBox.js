import React from "react";
import { Component } from "react";
import styled from "styled-components";
// import ErrorMessage from "../../conponents/SignIn/ErrorMessage";

class InputBox extends Component {
  render() {
    var data = this.props.data;
    var i = 0;
    var inputList = [];

    const InputBox = styled.input`
      margin: 10px auto;
      display: block;
      box-sizing: border-box;
      padding-left: 30px;
      width: 460px;
      height: 50px;
      border-radius: 5px;
      border: solid 1px #707070;
      background-color: #ffffff;

      ::placeholder {
        font-family: NanumSquareR;
        font-size: 14px;
        color: #a0a0a0;
      }
    `;

    const InputLebel = styled.label`
      font-family: NanumSquareL;
      font-size: 17px;
      color: #000000;
    `;

    while (i < data.length) {
      inputList.push(
        <InputLebel>
          {data[i].label}
          <InputBox
            type={data[i].kind}
            name={data[i].kind}
            placeholder={data[i].placeholder}
          />
          {/* <ErrorMessage></ErrorMessage> */}
        </InputLebel>
      );
      i++;
    }

    return <div>{inputList}</div>;
  }
}

export default InputBox;
