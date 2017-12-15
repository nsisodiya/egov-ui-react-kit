/**
 * Created by narendrasisodiya on 06/12/17.
 */
console.log('Finally Some changes working');
//alert("lets see");
import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ComponentLoader from '../components/ComponentLoader';
//import propTypesToObject from './helper/propTypesToObject';
// function print(component) {
//   console.log(propTypesToObject(component));
// }
// print(UiNumberField);

const Container = styled.div`
  padding: 20px;
  border: 2px solid palevioletred;
`;

const App = () => (
  <MuiThemeProvider>
    <Container>
      <ComponentLoader />
    </Container>
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
