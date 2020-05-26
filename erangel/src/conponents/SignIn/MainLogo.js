import React from "react";
import { Component } from "react";
import MainLogo from "../../assets/public/logo.png";
import styled from "styled-components";

class LoginButton extends Component {
  render() {
    const Logo = styled.img`
      height: 50px;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 50px;
    `;

    return (
      <>
        <div className="center">
          <Logo src={MainLogo} alt="main logo" />
        </div>
      </>
    );
  }
}

export default LoginButton;
