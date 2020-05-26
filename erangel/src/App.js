import React, { Component } from "react";
import "./App.css";
import LoginContainers from "./containers/SignIn/loginContainer";
// import SignUpContainer from "./containers/SignUp/SignUpContainer";

class App extends Component {
  render() {
    return (
      <>
        <LoginContainers></LoginContainers>
        {/* <SignUpContainer></SignUpContainer> */}
      </>
    );
  }
}

export default App;
