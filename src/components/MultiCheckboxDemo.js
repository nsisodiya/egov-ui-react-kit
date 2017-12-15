/**
 * Created by narendrasisodiya on 14/12/17.
 */

import React, { Component } from 'react';
import MultiCheckbox from './MultiCheckbox';

var demo1Porps = {
  debug: true,
  displayLabel: 'Please selected your hobbies',
  isRequired: true,
  isDisabled: false,
  defaultValue: ['C2'],
  data: [
    {
      label: 'Coding',
      code: 'C1',
    },
    {
      label: 'Programming',
      code: 'C2',
    },
    {
      label: 'Dummy Label 2',
      code: 'C3',
    },
  ],
};
export default class MultiCheckboxDemo extends Component {
  state = {
    textAreaValue: JSON.stringify(demo1Porps, null, '\t'),
    demo1Porps: demo1Porps,
  };
  onChange = selected => {
    console.log('Current Selected value is ', selected);
  };
  handleOnChangeTextArea = e => {
    console.log('handleOnChangeTextArea Called');
    var textAreaValue = e.target.value;
    try {
      var temp = JSON.parse(textAreaValue);
      this.setState({
        textAreaValue,
        demo1Porps: temp,
      });
    } catch (ex) {
      this.setState({
        textAreaValue,
      });
    }
  };
  validateFunction = selected => {
    if (selected.length < 2) {
      return 'At Least 2 must be selected';
    } else {
      return '';
    }
    //This function will run everytime onChange, and return a ErrorMessage.
  };
  render() {
    console.log('LifeCycle: MultiCheckboxDemo: Render');
    return (
      <div>
        <h1>MultiCheckbox</h1>
        <MultiCheckbox {...this.state.demo1Porps} validateFunction={this.validateFunction} onChange={this.onChange} />
        <textarea value={this.state.textAreaValue} onChange={this.handleOnChangeTextArea} name="" id="" cols="100" rows="20" />
      </div>
    );
  }
}
