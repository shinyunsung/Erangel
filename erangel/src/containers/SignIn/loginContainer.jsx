import React from "react";
import { Component } from "react";
import "./loginContainer.css";
import headerBox from "../../conponents/headerBox";

class loginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: "",
      Password: "",
    };
  }
  render() {
    const { Id, Password } = this.state;

    return (
      <div>
        <headerBox></headerBox>
        <div className="wrapper">
          <div className="content">
            <div className="mainLogo">enjoin</div>
            <div>
              <label>
                아이디
                <input
                  type="text"
                  name="Id"
                  placeholder="아이디를 입력하세요."
                  value={Id}
                />
              </label>
            </div>
            <label>
              비밀번호
              <input
                type="password"
                name="Password"
                placeholder="비밀번호를 입력하세요."
                value={Password}
              />
            </label>
            <button>회원가입</button>
          </div>
        </div>
      </div>
    );
  }
}

export default loginContainer;
