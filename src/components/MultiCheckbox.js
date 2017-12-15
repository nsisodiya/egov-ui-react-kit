/**
 * Created by narendrasisodiya on 14/12/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import styled from 'styled-components';
import { Checkbox } from 'material-ui';
import Red from './Red';
import ReactJsonViewer from 'react-json-viewer';
import Required from './Required';

const Container = styled.div`
  border: 1px solid gray;
  padding: 10px;
`;

import iff from '../helper/iff';
export default class MultiCheckbox extends Component {
  static propTypes = {
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    debug: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        code: PropTypes.string,
      })
    ).isRequired,
    defaultValue: PropTypes.arrayOf(PropTypes.string),
    displayLabel: PropTypes.string,
    validateFunction: PropTypes.func,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    debug: false,
    isDisabled: false,
    isRequired: false,
    defaultValue: [],
    displayLabel: '',
  };
  state = {
    allCheckboxsValues: [],
    errorMessage: '',
  };
  componentWillMount() {
    console.log('LifeCycle: MultiCheckbox: componentWillMount');
    this.calculateStateFromProps();
  }
  calculateStateFromProps() {
    var allCheckboxsValues = [];
    this.props.data.forEach((v, i) => {
      allCheckboxsValues[i] = this.props.defaultValue.indexOf(v.code) !== -1;
    });
    this.setState({
      allCheckboxsValues: allCheckboxsValues,
    });
  }

  componentWillReceiveProps() {
    console.log('LifeCycle: MultiCheckbox: componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('LifeCycle: MultiCheckbox: shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log('LifeCycle: MultiCheckbox: componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('LifeCycle: MultiCheckbox: componentDidUpdate');
  }
  componentDidMount() {
    console.log('LifeCycle: MultiCheckbox: componentDidMount');
  }
  handleCheckboxClick = (e, index) => {
    //TODO
    console.log('event on', index);
    var allCheckboxsValues = JSON.parse(JSON.stringify(this.state.allCheckboxsValues));
    allCheckboxsValues[index] = !allCheckboxsValues[index];

    var selected = this.props.data
      .filter((v, i) => {
        return allCheckboxsValues[i];
      })
      .map(function(v) {
        return v.code;
      });

    var errorMessage = '';
    if (typeof this.props.validateFunction === 'function') {
      errorMessage = this.props.validateFunction(selected);
    }

    this.setState(
      {
        allCheckboxsValues: allCheckboxsValues,
        errorMessage: errorMessage,
      },
      () => {
        if (typeof this.props.onChange === 'function') {
          this.props.onChange(selected);
        }
      }
    );
  };
  render() {
    console.log('LifeCycle: MultiCheckbox: render');
    return (
      <Container>
        {iff(
          this.props.debug,
          () => (
            <div>
              <h3>State</h3>
              <ReactJsonViewer json={JSON.parse(JSON.stringify(this.state))} />
              <h3>Props</h3>
              <ReactJsonViewer json={JSON.parse(JSON.stringify(this.props))} />
            </div>
          ),
          () => undefined
        )}
        <div>
          {this.props.displayLabel} <Required value={this.props.isRequired} />
        </div>
        {this.props.data.map((item, index) => {
          return (
            <Checkbox
              key={index}
              id={item.code}
              label={item.label}
              checked={this.state.allCheckboxsValues[index]}
              disabled={this.props.isDisabled}
              onCheck={e => {
                this.handleCheckboxClick(e, index);
              }}
            />
          );
        })}
        {iff(this.state.errorMessage !== '' && this.state.errorMessage !== undefined, () => <Red>{this.state.errorMessage}</Red>, () => undefined)}
      </Container>
    );
  }
}
