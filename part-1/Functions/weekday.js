/* Show a weekday

Write a function weekday(date) to find the weekday for a given Date object,
returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'. */

module.exports = function weekday(date) {
  if (date.getDay() === 0) {
    return 'Sun';
  }
  if (date.getDay() === 1) {
    return 'Mon';
  }
  if (date.getDay() === 2) {
    return 'Tue';
  }
  if (date.getDay() === 3) {
    return 'Wed';
  }
  if (date.getDay() === 4) {
    return 'Thu';
  }
  if (date.getDay() === 5) {
    return 'Fri';
  }
  if (date.getDay() === 6) {
    return 'Sat';
  }
};
