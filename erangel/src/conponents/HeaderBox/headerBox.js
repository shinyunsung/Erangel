import React from "react";
import { Component } from "react";
import "./headerBox.css";
import Logo from "../../assets/public/logo.png";
class headerBox extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerWrapper">
          <div className="halfWidth">
            <img className="headerLogo" src={Logo} alt="main-logo" />
          </div>
          <div className="halfWidth">
            <ul>
              <li>
                <a href="../\containers\SignUp\SignUpContainer.jsx">회원가입</a>
              </li>
              <li>
                <a href="/#">로그인</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default headerBox;
