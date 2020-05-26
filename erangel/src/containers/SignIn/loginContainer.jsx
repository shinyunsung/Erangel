import React from "react";
import { Component } from "react";
import "./loginContainer.css";
import HeaderBox from "../../conponents/HeaderBox/headerBox";
import InputBox from "../../conponents/SignIn/InputBox";
import ErrorMessage from "../../conponents/SignIn/ErrorMessage";
import Button from "../../conponents/SignIn/Button";
import MainLogo from "../../conponents/SignIn/MainLogo";
import styled from "styled-components";

class loginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // login: { id: "", pw: "", isLogin: null },
      inputList: [
        {
          kind: "id",
          label: "아이디",
          placeholder: "아이디를 입력하세요.",
        },
        {
          kind: "password",
          label: "비밀번호",
          placeholder: "비밀번호를 입력하세요.",
        },
      ],

      errMessageList: [
        {
          message: "",
        },
        {
          message: "아이디를 다시 입력하세요",
        },
        {
          message: "비밀번호를 다시 입력하세요.",
        },
      ],

      buttonText: { text: "로그인" },
    };
  }
  handleIDERROR = () => {
    this.props.iderror();
  };

  handlePwError = () => {
    this.props.decrement();
  };

  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      height: 94.4vh;
      width: 1040px;
      background-color: white;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `;

    return (
      <div className="container">
        <HeaderBox></HeaderBox>
        <Wrapper>
          <div>
            <MainLogo></MainLogo>
            <InputBox data={this.state.inputList}></InputBox>
            <ErrorMessage data={this.state.errMessageList[2]}></ErrorMessage>
            <Button text={this.state.buttonText}></Button>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default loginContainer;
