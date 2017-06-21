const assert = require('chai').assert;
const numProps = require('../Functions/numProps');

  describe('numProps', function(){
    it('Should return a number when given an object', function(){
      let result = numProps({
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'
      });
      assert.typeOf(result, 'number')
  });

    it('Should return 3 when given an object with 3 properties', function() {
      let result = numProps({
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'
      });
      assert.equal(result, 3)
  });

    it('Should return 0 when given an object with 0 properties', function() {
      let result = numProps({});
      assert.equal(result, 0);
  });

    it('Should return 2 when given an object with 2 properties', function() {
      let result = numProps({
        name: 'Patrick',
        age: 23
      });
      assert.equal(result, 2);
  });
})
