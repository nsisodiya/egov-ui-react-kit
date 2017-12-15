/**
 * Created by narendrasisodiya on 14/12/17.
 */

import React from 'react';
import Red from './Red';
import PropTypes from 'prop-types'; // ES6

export default function Required(props) {
  if (props.value === true) {
    return <Red>*</Red>;
  } else {
    return <span />;
  }
}
Required.propTypes = {
  value: PropTypes.bool.isRequired,
};
