import React from "react";
import { Component } from "react";
import HeaderBox from "../../compornents/HeaderBox/headerBox";
import styled from "styled-components";

class ViewDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      width: 1040px;
      background-color: white;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `;

    const Container = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: #f2f2f2;
    `;

    return (
      <div>
        <HeaderBox></HeaderBox>
        <Container>
          <Wrapper>dsf</Wrapper>
        </Container>
      </div>
    );
  }
}

export default ViewDetails;