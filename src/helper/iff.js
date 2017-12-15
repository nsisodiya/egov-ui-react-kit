/**
 * Created by narendrasisodiya on 15/12/17.
 */

export default function iff(condition, tValfunc, fValfunc) {
  if (condition === true) {
    return tValfunc();
  } else {
    return fValfunc();
  }
}
