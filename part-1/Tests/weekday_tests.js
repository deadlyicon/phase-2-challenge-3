const assert = require('chai').assert;
const weekday = require('../Functions/weekday');

  describe('weekday', function() {
    it('Should return a string', function() {
      let result = weekday(new Date(2017, 5, 19));
      assert.typeOf(result, 'string');
  });

    it('Should return "Mon" when given new Date(2017, 5, 19)', function() {
      let result = weekday(new Date(2017, 5, 19));
      assert.equal(result, 'Mon');
  });

    it('Should return "Thu" when given new Date(2017, 5, 15)', function () {
      let result = weekday(new Date(2017, 5, 15));
      assert.equal(result, 'Thu');
  });
})
