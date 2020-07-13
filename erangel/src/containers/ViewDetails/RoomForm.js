import React from "react";
import { Component } from "react";
import styled from "styled-components";
import InputImg from "../../conponents/ViewDetails/InputImg";
import InputText from "../../conponents/ViewDetails/inputText";
import InputTextarea from "../../conponents/ViewDetails/inputTextarea";

class RoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRoomName: {
        width: 120,
        height: 30,
        placeholder: "방 이름",
      },
      inputNumberOfPersonnel: {
        placeholder: "",
        width: 20,
        height: 30,
      },
      inputPrice: {
        placeholder: "가격",
        width: 120,
        height: 30,
      },
      inputRoomDescription: {
        placeholder: "방에 대해 설명해주세요.",
        width: 660,
        height: 100,
      },
      smallImg: {
        width: 220,
        height: 180,
        btnHeight: 30,
        imgHeight: 150,
      },
    };
  }

  render() {
    const RoomForm = styled.div`
    margin 30px 0;
    display: flex;
    `;
    const InlineBlockDiv = styled.div`
      display: inline-block;
    `;
    const MiniTitle = styled.div`
      padding: 0px 7.5px;
      display: inline-block;
      font-family: NanumSquare;
      font-size: 16px;
      font-weight: 800;
    `;

    return (
      <RoomForm>
        {/* 방정보 추가 : 이미지 */}
        <InlineBlockDiv style={{ marginRight: "20px" }}>
          <InputImg imgSize={this.state.smallImg}></InputImg>
        </InlineBlockDiv>
        {/* 방정보 추가 : 설명 */}
        <InlineBlockDiv>
          {/* 설명 상단 */}
          <InputText data={this.state.inputRoomName}></InputText>
          <MiniTitle>최소인원</MiniTitle>
          <InputText data={this.state.inputNumberOfPersonnel}></InputText>
          <MiniTitle>~ 최대인원</MiniTitle>
          <InputText data={this.state.inputNumberOfPersonnel}></InputText>
          <MiniTitle> ₩</MiniTitle>
          <InputText data={this.state.inputPrice}></InputText>
          <MiniTitle>원</MiniTitle>
          <MiniTitle>X</MiniTitle>
          {/* 설명 하단 */}
          <InputTextarea data={this.state.inputRoomDescription}></InputTextarea>
        </InlineBlockDiv>
      </RoomForm>
    );
  }
}

export default RoomForm;
