import React from "react";
import { Component } from "react";
import "../SignIn/loginContainer.css";
import HeaderBox from "../../conponents/HeaderBox/headerBox";
import SignUpFrom from "../../conponents/SignUp/SignUpFrom";
// import ErrorMessage from "../../conponents/SignIn/ErrorMessage";
// import EuneButton from "../../conponents/SignIn/DuneButton";
import MainLogo from "../../conponents/SignIn/MainLogo";
import styled from "styled-components";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // login: { id: "", pw: "", isLogin: null },
      inputList: [
        {
          kind: "id",
          label: "아이디 (영문)",
          placeholder: "아이디를 입력해주세요.",
        },
        {
          kind: "password",
          label: "비밀번호 (최소 8자)",
          placeholder: "비밀번호를 입력하세요.",
        },
        {
          kind: "password",
          label: "비밀번호 확인",
          placeholder: "비밀번호를 다시 입력하세요.",
        },
        {
          kind: "text",
          label: "이메일",
          placeholder: "이메일을 입력하세요.",
        },
      ],

      errMessageList: [
        {
          message: "",
        },
        {
          message: "비밀번호가 일치하지 않습니다.",
        },
      ],

      buttonText: {
        text: "회원가입 완료",
      },
    };
  }
  //아이디
  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };
  //패스워드
  handlePW = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      // height: 94.4vh;
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
            <SignUpFrom
              data={this.state.inputList}
              Buttontext={this.state.buttonText}
              errMessageList={this.state.errMessageList}
            ></SignUpFrom>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default SignUpContainer;
