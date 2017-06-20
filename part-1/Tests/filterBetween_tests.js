const assert = require('chai').assert;
const filterBetween = require('../Functions/filterBetween');

  describe('filterBetween', function() {
    it('Should return an array', function() {
      let result = filterBetween([1, 2, 3, 4, 5, 6, 7], 3, 6);
      assert.typeOf(result, 'array');
  });

    it('Should return [3, 4, 5, 6] when given ([1, 2, 3, 4, 5, 6, 7], 3, 6)', function() {
      let result = filterBetween([1, 2, 3, 4, 5, 6, 7], 3, 6);
      assert.deepEqual(result, [3, 4, 5, 6]);
  });

    it('Should return [5, 6, 7] when given([1, 2, 3, 4, 5, 6, 7], 5, 10)', function() {
      let result = filterBetween([1, 2, 3, 4, 5, 6, 7], 5, 10);
      assert.deepEqual(result, [5, 6, 7]);
  });
})
