const assert = require('chai').assert;
const snippet = require('../Functions/snippet');

  describe('snippet', function() {
    it('Should return a string', function() {
      let result = snippet("For the following exercises,", 10);
      assert.typeOf(result, 'string');
  });

    it('Should return "For the fo..." when given ("For the following exercises,", 10)', function() {
      let result = snippet("For the following exercises,", 10);
      assert.equal(result, 'For the fo...');
  });

    it('Should return "Hello, world!" when given ("Hello, world!", 20)', function() {
      let result = snippet("Hello, world!", 20);
      assert.equal(result, 'Hello, world!');
  });

  it('Should return "H..." when given ("Hi, my name is Patrick!", 1)', function() {
    let result = snippet("Hi, my name is Patrick!", 1);
    assert.equal(result, 'H...');
});
})
