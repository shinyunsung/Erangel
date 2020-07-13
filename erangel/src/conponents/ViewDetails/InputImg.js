import React from "react";
import { Component } from "react";
import styled from "styled-components";

class InputImg extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", previewURL: "" };
  }

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const Input = styled.input`
      display: none;
      margin-top: auto;
      width: 100%;
    `;

    const InputModule = styled.div`
      width: ${(props) => props.width}px;
      height: ${(props) => props.height}px;
      background-color: #c4c4c4;

      display: inline-flex;
      flex-direction: column;
    `;

    const InputImg = styled.img`
      width: ${(props) => props.width}px;
      height: ${(props) => props.height}px;
    `;

    const InputBtn = styled.label`
      width: ${(props) => props.width}px;
      height: ${(props) => props.height}px;
      background-color: #fab514;
      cursor: pointer;
    `;

    let profile_preview = null;
    profile_preview = (
      <InputImg
        className="profile_preview"
        src={this.state.previewURL}
        alt=""
        width={this.props.imgSize.width}
        height={this.props.imgSize.imgHeight}
      ></InputImg>
    );

    return (
      <InputModule
        width={this.props.imgSize.width}
        height={this.props.imgSize.height}
      >
        {profile_preview}
        <InputBtn
          for="button"
          width={this.props.imgSize.width}
          height={this.props.imgSize.btnHeight}
        >
          <Input
            id="button"
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="profile_img"
            onChange={this.handleFileOnChange}
          ></Input>
        </InputBtn>
      </InputModule>
    );
  }
}

export default InputImg;
