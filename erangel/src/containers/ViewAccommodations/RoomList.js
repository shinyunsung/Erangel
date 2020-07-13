import React from "react";
import { Component } from "react";
import styled from "styled-components";
import RoomImg from "../../assets/public/background.png";

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "inline",
          width: "940px",
          wordBreak: "break-all",
        }}
      >
        <ListView room={this.props.room} />
      </div>
    );
  }
}

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.room.map((contact, i) => {
      return (
        <div>
          <ItemInfo room={this.props.room[i]} />
        </div>
      );
    });
  }
}

ListView.defaultProps = {
  room: [],
};

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Item = styled.div`
      display: flex;
      padding: 40px 0;
      width: 940px;
      height: 180px;

      border-top: 1px #f2f2f2 solid;
      border-bottom: 1px #f2f2f2 solid;
    `;

    const Picture = styled.img`
      margin-right: 20px;
      width: 220px;
      height: 180px;
      border-radius: 10px;
    `;

    const FirstLine = styled.div`
      display: inline-flex;
      align-items: center;
      height: 20px;
    `;
    const MiddleLine = styled.div`
      display: inline-flex;
      align-items: center;
      height: 140px;
    `;

    const LastLine = styled.div`
      font-size: 16px;
      text-align: right;
    `;
    const RoomName = styled.span`
      margin-right: 20px;
      font-size: 17px;
      font-weight: bold;
    `;

    const Personnel = styled.span`
      font-size: 10px;
    `;
    return (
      <Item>
        <Picture src={RoomImg} alt="." />
        <div style={{ width: "700px" }}>
          <FirstLine>
            <RoomName>{this.props.room.name}</RoomName>
            <Personnel>
              최소 인원 {this.props.room.min}명 ~ 최대 인원{" "}
              {this.props.room.max}명
            </Personnel>
          </FirstLine>
          <MiddleLine>{this.props.room.explanation}</MiddleLine>
          <LastLine>{this.props.room.cost} 원</LastLine>
        </div>
      </Item>
    );
  }
}

export default RoomList;
