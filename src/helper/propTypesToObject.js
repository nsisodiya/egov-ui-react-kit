/**
 * Created by narendrasisodiya on 09/12/17.
 */
import PropTypes from 'prop-types';

const isCorrectPropType = (method, propType) => method === PropTypes[propType] || method === PropTypes[propType].isRequired;

const isPropTypeRequired = (method, propType) => method === PropTypes[propType].isRequired;

const getPropInfo = method => {
  const propTypes = ['node', 'bool', 'array', 'func', 'number', 'object', 'string', 'symbol'];
  return propTypes.reduce((obj, curr) => {
    const isCorrect = isCorrectPropType(method, curr);
    if (obj.type) {
      return obj;
    }
    if (isCorrect) {
      obj.type = curr;
      obj.required = isPropTypeRequired(method, curr);
    }
    return obj;
  }, {});
};

const propTypesToObject = ({ checkPropTypes, propTypes, defaultProps }) => {
  console.error(checkPropTypes);
  let newProps = Object.keys(propTypes).reduce((obj, curr) => {
    const info = getPropInfo(propTypes[curr]);
    return {
      ...obj,
      [curr]: {
        type: info.type,
        required: info.required,
      },
    };
  }, {});
  Object.keys(newProps).forEach(function(propName) {
    newProps[propName].default = defaultProps[propName];
  });
  return newProps;
};

export default propTypesToObject;
