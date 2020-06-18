import React from "react";
import { Component } from "react";
import styled from "styled-components";
import DoneButton from "../SignIn/DuneButton";
import ErrorMessage from "../SignIn/ErrorMessage";

class SignUpFrom extends Component {
  render() {
    var data = this.props.data;
    var i = 0;
    var inputList = [];

    const SignUpFrom = styled.input`
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
      margin: 0 20px;

      font-family: NanumSquareL;
      font-size: 17px;
      color: #000000;
    `;
    const UserButton = styled.input`
      display: none;
      :checked + label {
        background-color: #fab514;
        color: white;
        border: 0px;
      }
    `;

    const Userlabel = styled.label`
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

    while (i < data.length) {
      inputList.push(
        <InputLebel>
          {data[i].label}
          <SignUpFrom
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
          <UserButton
            type="radio"
            name="userClassification"
            value="host"
            id="host-button"
          ></UserButton>
          <Userlabel class="button-label" for="host-button">
            숙박 주인
          </Userlabel>
          <UserButton
            type="radio"
            name="userClassification"
            value="guest"
            id="guest-button"
            checked
          ></UserButton>
          <Userlabel class="button-label" for="guest-button">
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
          <DoneButton Buttontext={this.props.Buttontext.text}></DoneButton>
        </form>
      </div>
    );
  }
}

export default SignUpFrom;
