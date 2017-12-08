/**
 * Created by narendrasisodiya on 08/12/17.
 */

import React, { Component } from "react";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types"; // ES6
import styled from "styled-components";

const Container = styled.div`
  //border-radius: 3px;
  //padding: 20px;
  //background: white;
  border: 1px solid lightgray;
  height: 98px;
  label {
    font-size: 18px !important;
  }
  
  input{
    border-right: 0 !important;
    border-radius: 5px !important;
    border: 1px solid #ccc !important;
    position: relative !important;
    background-color: #FBFBFB !important;
    box-shadow: 0px !important;
    padding:0 10px !important;
    top:24px !important;
    height: 34px !important;
  }
  div:nth-child(2){
    bottom: 0px !important;
    z-index: 10;
    pointer-events: none;
    left: 10px;
  }
  div > div:last-child {
    bottom: -34px !important;
  }
  hr {
    border-bottom: 0px !important;
  }
`;

function iff(condition, trueState, falseState) {
  if (condition) {
    return trueState;
  } else {
    return falseState;
  }
}

export default class UiNumberField extends Component {
  static propTypes = {
    isHideLabel: PropTypes.bool,
    isDisabled: PropTypes.bool,
    hide: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.number,
    errorText: PropTypes.string,
    onChange: PropTypes.func
  };
  static defaultProps = {
    isDisabled: false,
    onChange: () => ({})
  };
  render() {
    let labelProperty = !this.props.isHideLabel && {
      floatingLabelFixed: true,
      floatingLabelStyle: {
        color: iff(this.props.isDisabled, "#A9A9A9", "#696969"),
        fontSize: "20px",
        whiteSpace: "nowrap"
      },
      floatingLabelText: (
        <span>
          {this.props.label}
          {" "}
          <span style={{ color: "#FF0000" }}>
            {iff(this.props.isRequired, " *", "")}
          </span>
        </span>
      )
    };

    if (this.props.hide === true) {
      return;
    }
    return (
      <Container>
        <TextField
          //id={this.props.jsonPath.split(".").join("-")}
          inputStyle={{ color: "#5F5C57" }}
          //errorStyle={JSON.parse('{"float":"left"}')}
          fullWidth={true}
          type="number"
          //value={this.props.value}
          disabled={this.props.isDisabled}
          errorText={this.props.errorText}
          {...labelProperty}
          onChange={this.props.onChange}
        />
      </Container>
    );
  }
}
