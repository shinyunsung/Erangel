import React from "react";
import { Component } from "react";
import styled from "styled-components";

class ApprovalList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ItemList ApprovalList={this.props.ApprovalList} />
      </>
    );
  }
}

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.ApprovalList.map((contact, i) => {
      return (
        <div>
          <ItemInfo ApprovalList={this.props.ApprovalList[i]} />
        </div>
      );
    });
  }
}

ItemList.defaultProps = {
  ApprovalList: [],
};

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Category = styled.div`
      display: inline-block;
      font-size: 14px;
      color: #a0a0a0;
      text-align: center;
      padding: 10px 00px;
      border-top: solid 1px #d3d3d3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
    return (
      <>
        <Category style={{ width: "20.4%" }}>
          {this.props.ApprovalList.booking_date}
        </Category>
        <Category
          style={{
            width: "15.4%",
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          {this.props.ApprovalList.organization}
        </Category>
        <Category
          style={{
            width: "16.4%",
          }}
        >
          ""
        </Category>
        <Category style={{ width: "26.2%" }}>
          {this.props.ApprovalList.checkin} ~{this.props.ApprovalList.checkout}
        </Category>
        <Category style={{ width: "8.2%" }}>
          {this.props.ApprovalList.people}
        </Category>
      </>
    );
  }
}

export default ApprovalList;
