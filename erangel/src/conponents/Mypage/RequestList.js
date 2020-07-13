import React from "react";
import { Component } from "react";
import styled from "styled-components";

class RequestList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ItemList RequestList={this.props.RequestList} />
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
    return this.props.RequestList.map((contact, i) => {
      return (
        <div>
          <ItemInfo RequestList={this.props.RequestList[i]} />
        </div>
      );
    });
  }
}

ItemList.defaultProps = {
  RequestList: [],
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
          {this.props.RequestList.booking_date}
        </Category>
        <Category
          style={{
            width: "15.4%",
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          {this.props.RequestList.organization}
        </Category>
        <Category
          style={{
            width: "16.4%",
          }}
        >
          ""
        </Category>
        <Category style={{ width: "26.2%" }}>
          {this.props.RequestList.checkin} ~{this.props.RequestList.checkout}
        </Category>
        <Category style={{ width: "8.2%" }}>
          {this.props.RequestList.people}
        </Category>
      </>
    );
  }
}

export default RequestList;
