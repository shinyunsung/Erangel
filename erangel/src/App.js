import React, { Component } from "react";
import "./App.css";
// import LoginContainers from "./containers/SignIn/loginContainer";
// import SignUpContainer from "./containers/SignUp/SignUpContainer";
import ViewDetailsContainer from "./containers/ViewDetails/ViewDetailsContainer";
class App extends Component {
  render() {
    return (
      <>
        {/* <LoginContainers></LoginContainers> */}
        {/* <SignUpContainer></SignUpContainer> */}
        <ViewDetailsContainer></ViewDetailsContainer>
      </>
    );
  }
}

export default App;
