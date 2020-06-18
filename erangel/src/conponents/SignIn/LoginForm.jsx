import React from "react";
import { Component } from "react";
import styled from "styled-components";
import DoneButton from "./DuneButton";
import ErrorMessage from "./ErrorMessage";

class LoginForm extends Component {
  render() {
    var data = this.props.data;
    var i = 0;
    var inputList = [];

    const LoginForm = styled.input`
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
          <LoginForm
            type={data[i].kind}
            name={data[i].kind}
            placeholder={data[i].placeholder}
          />
          <ErrorMessage
            errMessageList={this.props.errMessageList}
          ></ErrorMessage>
        </InputLebel>
      );
      i++;
    }

    return (
      <div>
        <form action="#">
          {inputList}
          <DoneButton Buttontext={this.props.Buttontext.text}></DoneButton>
        </form>
      </div>
    );
  }
}

export default LoginForm;
