/* Write a function snippet(string, maxlength) that shortens the string given to
the maxlength and adds the ellipsis character ("…") to the end of string, and
then returns the shortened string.
 If the string is shorter than the maxlength, just return the string unmodified.
*/

module.exports = function snippet(string, maxlength) {
  let stringArray = string.split('');
  if (stringArray.length < maxlength) {
    return string
  }
  else for (var i = 0; i < maxlength; i++) {
    let newString = stringArray.slice(0, maxlength);
    return newString.join('') + '...'
  }
};
