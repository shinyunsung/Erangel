import React from "react";
import { Component } from "react";
import styled from "styled-components";
// import DoneButton from "../SignIn/DuneButton";
// import ErrorMessage from "../SignIn/ErrorMessage";
import axios from "axios";
import "../../conponents/SignIn/style.css";

class SignUpFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      email: "",
      class: "guest",
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioButton = this.handleRadioButton.bind(this);
  }

  handleRadioButton = (e) => {
    this.setState({
      class: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onClickButton() {
    const apiUrl = "/v1/signup";
    axios
      .post(apiUrl, null, {
        params: {
          id: this.state.id,
          password: this.state.password,
          email: this.state.email,
          class: this.state.class,
        },
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // ConfirmPassword(){

  // }

  render() {
    var data = this.props.data;
    var i = 0;
    var inputList = [];

    // const SignUpInput = styled.input`
    //   margin: 10px auto;
    //   display: block;
    //   box-sizing: border-box;
    //   padding-left: 30px;
    //   width: 460px;
    //   height: 50px;
    //   border-radius: 5px;
    //   border: solid 1px #707070;
    //   background-color: #ffffff;

    //   ::placeholder {
    //     font-family: NanumSquareR;
    //     font-size: 14px;
    //     color: #a0a0a0;
    //   }
    // `;

    // const InputLebel = styled.label`
    //   margin: 0 20px;

    //   font-family: NanumSquareL;
    //   font-size: 17px;
    //   color: #000000;
    // `;

    const UserButton = styled.input`
      display: none;
      :checked + label {
        background-color: #fab514;
        color: white;
        border: 0px;
      }
    `;

    const Userlabel = styled.label`
      margin-bottom: 20px;
      width: 216px;
      height: 80px;
      cursor: pointer;
      color: black;
      border-radius: 0.25em;
      border: solid 1px #a0a0a0;

      display: inline-flex;
      align-items: center;
      justify-content: center;
    `;

    const InputButton = styled.input`
      margin: 40px 0;

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

    while (i < data.length) {
      inputList.push(
        <label className="InputLebel">
          {data[i].label}
          <input
            type={data[i].kind}
            name={data[i].kind}
            placeholder={data[i].placeholder}
            id={data[i].id}
            onChange={this.handleChange}
            className="LoginInput"
          ></input>
          {/* <ErrorMessage
            errMessageList={this.props.errMessageList}
          ></ErrorMessage> */}
        </label>
      );
      i++;
    }

    return (
      <div>
        <form action="#">
          {inputList}
          <UserButton
            type="radio"
            name="userClassification"
            value="owner"
            id="host-button"
            onClick={this.handleRadioButton}
          ></UserButton>
          <Userlabel class="button-label" for="host-button">
            숙박 주인
          </Userlabel>
          <UserButton
            type="radio"
            name="userClassification"
            value="guest"
            id="guest-button"
            onClick={this.handleRadioButton}
            checked
          ></UserButton>
          <Userlabel
            class="button-label"
            for="guest-button"
            style={{ marginLeft: "25px" }}
            checked
          >
            개인
          </Userlabel>
          <details>
            {/* 약관 펼치기 수정 바람 */}
            <summary>자세히 보기 //후에 수정</summary>

            <h4>약관 동의</h4>
            <h5>만 14세 이상입니다</h5>
            <h5>서비스 약관 동의</h5>
            <h5>개인정보 수집 이용 동의</h5>
          </details>
          <lable>
            <input type="checkbox"></input>동의합니다.
          </lable>
          {this.state.class}
          <InputButton
            type="submit"
            value="회원가입 완료"
            onClick={this.onClickButton}
          ></InputButton>
        </form>
      </div>
    );
  }
}

export default SignUpFrom;
