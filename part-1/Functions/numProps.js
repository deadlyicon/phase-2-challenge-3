/* Write a function numProps(obj) that returns the number of properties an
object has. Ignore symbolic properties and count only the "own properties"
(not inherited) of the object. */

module.exports = function numProps(obj) {
  return Object.keys(obj).length
};
