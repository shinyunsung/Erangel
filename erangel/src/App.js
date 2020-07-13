import React, { Component } from "react";
import "./App.css";
// import LoginContainers from "./containers/SignIn/loginContainer";
import SignUpContainer from "./containers/SignUp/SignUpContainer";
// import ViewDetailsContainer from "./containers/ViewDetails/ViewDetailsContainer";
// import ViewAccommodations from "./containers/ViewAccommodations/ViewAccommodations";
// import ClientMyPageContainer from "./containers/MyPage/Client/ClientMyPageContainer";
// import Request from "./containers/MyPage/Owner/Request"
// import Approval from "./containers/MyPage/Owner/Approval";
class App extends Component {
  render() {
    return (
      <>
        {/* <LoginContainers></LoginContainers> */}
        <SignUpContainer></SignUpContainer>
        {/* <ViewDetailsContainer></ViewDetailsContainer> */}
        {/* <ViewAccommodations></ViewAccommodations> */}
        {/* <ClientMyPageContainer></ClientMyPageContainer> */}
        {/* <Request></Request> */}
        {/* <Approval></Approval> */}
      </>
    );
  }
}

export default App;
