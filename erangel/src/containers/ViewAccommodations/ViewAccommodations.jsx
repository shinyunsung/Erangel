import React from "react";
import { Component } from "react";
import HeaderBox from "../../conponents/HeaderBox/headerBox";
import styled from "styled-components";
import axios from "axios";
import "../ViewDetails/View.css";
import MainImage from "../../assets/public/background.png";
import RoomList from "./RoomList";
import location from "../../assets/public/location.png";
import coin from "../../assets/public/coin.png";

class ViewAccommodations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = "dummy/ViewDetails.json";
    axios
      .get(apiUrl)
      .then((data) => {
        this.setState({
          name: data.data.name,
          min_cost: data.data.min_cost,
          max_cost: data.data.max_cost,
          address: data.data.address,
          explanation: data.data.explanation,
          detail: data.data.detail,
          room: data.data.room,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      padding: 80px 0px;
      height: 94.4%; // 수정
      width: 1040px;
      background-color: white;
    `;

    const Right = styled.div`
      width: 460px;
      display: inline-block;
      text-align: left;
      font-family: NanumSquare;
    `;

    const MainImg = styled.div`
      width: 460px;
      height: 345px;
      background-image: url(${MainImage});
      // 이미지 url
    `;

    const Left = styled.div`
      margin: 0 20px 0 40px;
      width: 460px;
      display: inline-block;
    `;

    const Top = styled.div`
      display: flex;
      width: 940px;
    `;

    const Title = styled.div`
      margin-bottom: 20px;
      font-size: 26px;
      font-weight: 800;
    `;

    const MiniTitle = styled.div`
      // margin-bottom: 20px;
      padding: 0px 7.5px;
      display: inline-block;
      font-family: NanumSquare;
      font-size: 16px;
      font-weight: 800;
    `;
    const Detail = styled.div`
      width: 460px;
      text-align: center;
      font-family: NanumSquare;
      font-size: 16px;
      color: #545454;
    `;

    const Paragraph = styled.div`
      margin: 80px 50px 0 50px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `;

    const ReservationButton = styled.button`
      width: 459px;
      height: 40px;
      border-radius: 5px;
      background-color: #fab514;
      border: 0;
      cursor: pointer;

      font-size: 16px;
      font-weight: bold;
      color: white;
    `;

    return (
      <div className="container">
        <HeaderBox></HeaderBox>
        <Wrapper>
          <Top>
            <Left>
              <MainImg></MainImg>
            </Left>
            <Right>
              <Title>{this.state.name}</Title>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img src={coin} alt="머니"></img>
                <MiniTitle>가격 : 최소 </MiniTitle>
                <span>{this.state.min_cost}원</span>
                <MiniTitle>~ 최대</MiniTitle>
                <span>{this.state.max_cost}원</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img src={location} alt="위치"></img>
                <MiniTitle>주소 : </MiniTitle>
                <span>{this.state.address}</span>
              </div>
              <div style={{ height: "150px" }}>
                <MiniTitle
                  style={{
                    marginBottom: "10px",
                    borderBottom: "solid 2px #545454",
                  }}
                >
                  한 줄 소개
                </MiniTitle>
                <br></br>
                <span>{this.state.explanation}</span>
              </div>

              <ReservationButton>예약하기</ReservationButton>
            </Right>
          </Top>

          <Paragraph>
            <Detail>
              <MiniTitle style={{ color: "black", marginBottom: "20px" }}>
                상세 정보
              </MiniTitle>
              <div>{this.state.detail}</div>
            </Detail>
          </Paragraph>

          <Paragraph>
            <MiniTitle>방 정보</MiniTitle>
          </Paragraph>

          <Paragraph>
            <RoomList room={this.state.room}></RoomList>
          </Paragraph>
        </Wrapper>
      </div>
    );
  }
}

export default ViewAccommodations;
