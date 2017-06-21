/* Show a weekday

Write a function weekday(date) to find the weekday for a given Date object,
returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'. */

module.exports = function weekday(date) {
  let correction1 = date.getFullYear();
  let correction2 = date.getMonth() - 1;
  let correction3 = date.getDate();
  let correctDate = new Date(correction1, correction2, correction3);
  if (correctDate.getDay() === 0) {
    return 'Sun';
  }
  if (correctDate.getDay() === 1) {
    return 'Mon';
  }
  if (correctDate.getDay() === 2) {
    return 'Tue';
  }
  if (correctDate.getDay() === 3) {
    return 'Wed';
  }
  if (correctDate.getDay() === 4) {
    return 'Thu';
  }
  if (correctDate.getDay() === 5) {
    return 'Fri';
  }
  if (correctDate.getDay() === 6) {
    return 'Sat';
  }
};
