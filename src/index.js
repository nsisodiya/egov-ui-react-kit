/**
 * Created by narendrasisodiya on 06/12/17.
 */
console.log("Finally Some changes working");
//alert("lets see");
import "normalize.css/normalize.css";
import React from "react";
import { render } from "react-dom";
import UiNumberField from "./components/UiNumberField";
import styled from "styled-components";
import propTypesToObject from "./helper/propTypesToObject";

function print(component) {
  console.log(propTypesToObject(component));
}
print(UiNumberField);
const Container = styled.div`
  padding: 20px;
  border: 2px solid palevioletred;
`;

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => (
  <MuiThemeProvider>
    <Container>
      <h2>UiNumberField</h2>
      <UiNumberField
        hide={false} isDisabled={true} isRequired={true} errorText="Fuck you" label="Your Age?" value={45} onChange={function (event, value) {
        console.log("Value Changes", value);
      }}/>
    </Container>
  </MuiThemeProvider>
);

render(<App />, document.getElementById("root"));
