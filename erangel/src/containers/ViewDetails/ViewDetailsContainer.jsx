import React from "react";
import { Component } from "react";
import HeaderBox from "../../conponents/HeaderBox/headerBox";
import styled from "styled-components";
import "../ViewDetails/View.css";
import InputImg from "../../conponents/ViewDetails/InputImg";
import InputText from "../../conponents/ViewDetails/inputText";
import InputTextarea from "../../conponents/ViewDetails/inputTextarea";
import PlusButton from "../../assets/public/plus_button.png";
import RoomForm from "./RoomForm";

class ViewDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImg: {
        width: 460,
        height: 345,
        btnHeight: 40,
        imgHeight: 305,
      },

      inputNameOfLodging: {
        placeholder: "숙소이름",
        width: 340,
      },
      inputMinimumPrice: {
        placeholder: "최소가격",
        width: 120,
      },
      inputMaximumPrice: {
        placeholder: "최대가격",
        width: 120,
      },
      inputIntroduction: {
        placeholder:
          "아주 간략하게 설명해주세요\n상세한 정보는 아래 상세보기 칸에 작성해 주세요.",
        width: 420,
        height: 140,
      },
      inputAddress: {
        width: 340,
        placeholder: "주소를 입력해주세요.",
      },
      inputRoomDetails: {
        width: 900,
        height: 310,
        placeholder: "상세 정보를 입력하세요.",
      },
      roomList: [<RoomForm></RoomForm>],

      // Buttontext: {
      //   value: "등록하기",
      // },
    };
    this.handleAddButton = this.handleAddButton.bind(this);
  }

  handleAddButton = () => {
    console.log(this.state.roomList);
    this.state.roomList.push(<RoomForm></RoomForm>);
  };

  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      padding: 80px 0px;
      height: 94.4%; // 수정
      width: 1040px;
      background-color: white;

      // display: flex;
      // flex-direction: row;
      // align-items: center;
      // justify-content: center;
    `;

    const Right = styled.div`
      width: 460px;
      display: inline-block;
      text-align: right;
    `;

    const Left = styled.div`
      margin-right: 20px;
      width: 460px;
      display: inline-block;
    `;

    const Top = styled.div`
      display: flex;
      width: 940px;
    `;

    const MiniTitle = styled.div`
      padding: 0px 7.5px;
      display: inline-block;
      font-family: NanumSquare;
      font-size: 16px;
      font-weight: 800;
    `;

    const Paragraph = styled.div`
      margin: 80px 50px 0 50px;
    `;

    const AddButton = styled.div`
      width: 940px;
      height: 180px;
      border-radius: 5px;
      border: solid 1px #a0a0a0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      cursor: pointer;
    `;

    const Button = styled.input.attrs({ type: "submit", value: "전송하기" })`
      width: 460px;
      height: 50px;
      border-radius: 5px;
      border: solid 1px #a0a0a0;
      background-color: #ffffff;
      color: black;
      cursor: pointer;
      &:hover {
        background-color: #fab514;
        border: none;
        color: #fff;
      }
    `;
    const NoneButton = styled.button`
      margin-right: 20px;

      width: 460px;
      height: 50px;
      border-radius: 5px;
      border: solid 1px #a0a0a0;
      background-color: #ffffff;
      color: black;
      cursor: pointer;

      &:hover {
        background-color: #fab514;
        border: none;
        color: #fff;
      }
    `;
    return (
      <div className="container">
        <HeaderBox></HeaderBox>
        <Wrapper>
          <div>
            <from action="#" method="post">
              <center>
                <Top>
                  <Left>
                    <InputImg imgSize={this.state.mainImg}></InputImg>
                  </Left>
                  <Right>
                    <MiniTitle>숙소</MiniTitle>
                    <InputText data={this.state.inputNameOfLodging}></InputText>
                    <MiniTitle>최소</MiniTitle>
                    <InputText data={this.state.inputMinimumPrice}></InputText>
                    <MiniTitle>~ 최대</MiniTitle>
                    <InputText data={this.state.inputMaximumPrice}></InputText>
                    <MiniTitle>주소</MiniTitle>
                    <InputText data={this.state.inputAddress}></InputText>
                    <InputTextarea
                      data={this.state.inputIntroduction}
                    ></InputTextarea>
                  </Right>
                </Top>

                <Paragraph>
                  <MiniTitle style={{ marginBottom: "30px" }}>
                    상세보기
                  </MiniTitle>
                  <InputTextarea
                    data={this.state.inputRoomDetails}
                  ></InputTextarea>
                </Paragraph>
              </center>

              <Paragraph>
                <center>
                  <MiniTitle>방정보</MiniTitle>{" "}
                </center>
                {this.state.roomList}
                <AddButton onClick={this.handleAddButton}>
                  <img src={PlusButton} alt="더하기 버튼"></img>
                </AddButton>
              </Paragraph>
              <Paragraph>
                <NoneButton>취소</NoneButton>
                <Button></Button>
              </Paragraph>
            </from>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default ViewDetailsContainer;
