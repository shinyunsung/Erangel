import React from "react";
import { Component } from "react";
import styled from "styled-components";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ItemList ApplicationList={this.props.ApplicationList} />
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
    return this.props.ApplicationList.map((contact, i) => {
      return (
        <div>
          <ItemInfo ApplicationList={this.props.ApplicationList[i]} />
        </div>
      );
    });
  }
}

ItemList.defaultProps = {
  data: [],
};

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.ApplicationList);
    console.log("this.props.ApplicationList");

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
          {this.props.ApplicationList.booking_date}
        </Category>
        <Category
          style={{
            width: "16.4%",

            fontWeight: "bold",
            color: "#333333",
          }}
        >
          ""
        </Category>
        <Category style={{ width: "15.4%" }}>
          {this.props.ApplicationList.organization}
        </Category>
        <Category style={{ width: "26.2%" }}>
          {this.props.ApplicationList.checkin} ~
          {this.props.ApplicationList.checkout}
        </Category>
        <Category style={{ width: "8.2%" }}>
          {this.props.ApplicationList.people}
        </Category>
        <Category style={{ width: "13.4%" }}>
          {this.props.ApplicationList.status}
        </Category>
      </>
    );
  }
}

export default List;
