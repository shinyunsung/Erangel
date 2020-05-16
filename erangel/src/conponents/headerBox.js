import React from "react";
import { Component } from "react";
import "./headerBox.css";

class headerBox extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerWrapper">
          <span className="headerLogo">enjoin</span>
          <ul>
            <li>
              <a href="/#">회원가입</a>
            </li>
            <li>
              <a href="/#">로그인</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default headerBox;
