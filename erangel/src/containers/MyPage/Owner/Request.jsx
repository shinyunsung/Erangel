import React from "react";
import { Component } from "react";
import HeaderBox from "../../../conponents/HeaderBox/headerBox";
import styled from "styled-components";
import axios from "axios";
import "../Owner/OwnerMyPage.css";
import RequestList from "../../../conponents/Mypage/RequestList";
class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ApplicationList: [],
    };
  }

  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = "dummy/RequestList.json";
    axios
      .get(apiUrl)
      .then((data) => {
        this.setState({
          RequestList: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      padding: 80px 50px;
      height: 80vh; // 수정
      width: 940px;
      background-color: white;
    `;
    const TiTle = styled.div`
      display: inline-block;
      font-size: 26px;
      font-weight: 800;
      padding-bottom: 6px;
      margin-right: 50px;
      border-bottom: solid 5px #fab514;
    `;
    const Category = styled.div`
      display: inline-block;
      font-size: 16px;
      text-align: center;
      margin-top: 40px;
      padding: 10px 0px;
      border-top: solid 1px #d3d3d3;
    `;
    // const Name = styled.div`
    //   margin-bottom: 50px;
    //   font-size: 20px;
    // `;
    return (
      <div className="container">
        <HeaderBox></HeaderBox>
        <Wrapper>
          <div>
            {/* <Name>숙소 이름이 들어감</Name> */}
            <TiTle>예약 신청 목록</TiTle>
            <TiTle style={{ color: "#D3D3D3", borderBottom: "none" }}>
              승인한 예약 목록
            </TiTle>
            <br></br>
            <Category style={{ width: "20.4%" }}>예약신청일자</Category>
            <Category style={{ width: "15.4%" }}>단체명</Category>
            <Category style={{ width: "16.4%" }}>숙소명</Category>
            <Category style={{ width: "26.2%" }}>예약일</Category>
            <Category style={{ width: "8.2%" }}>인원</Category>
          </div>
          <RequestList RequestList={this.state.RequestList}> </RequestList>
        </Wrapper>
      </div>
    );
  }
}

export default Request;
