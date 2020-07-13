import React from "react";
import { Component } from "react";
import styled from "styled-components";
// import DoneButton from "./DuneButton";
// import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import "../../conponents/SignIn/style.css";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onClickButton() {
    const apiUrl = "/v1/auth";
    axios
      .post(apiUrl, null, {
        params: {
          id: this.state.id,
          password: this.state.password,
        },
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    var data = this.props.data;
    var i = 0;
    var inputList = [];

    // const LoginInput = styled.input`
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
    //   font-family: NanumSquareL;
    //   font-size: 17px;
    //   color: #000000;
    // `;

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

    while (i < data.length) {
      inputList.push(
        <label className="InputLebel">
          {data[i].label}
          <input
            type={data[i].kind}
            name={data[i].kind}
            placeholder={data[i].placeholder}
            id={data[i].kind}
            onChange={this.handleChange}
            className="LoginInput"
          ></input>
        </label>

        // <ErrorMessage
        //   errMessageList={this.props.errMessageList}
        // ></ErrorMessage>
      );
      i++;
    }

    return (
      <div>
        <form action="#">
          {inputList}
          <InputButton
            type="submit"
            value="로그인"
            onClick={this.onClickButton}
          ></InputButton>
        </form>
      </div>
    );
  }
}

export default LoginForm;
