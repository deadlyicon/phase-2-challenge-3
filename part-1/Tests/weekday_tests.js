let expect = require('chai').expect;
let weekday = require('./part_1_tests.js').weekday

  describe('weekday', function() {

    it('is a function', function(){
      expect(weekday).to.be.a('function')
  })

    it('returns a string', function() {
      const date = weekday(new Date(2017, 5, 15))
      expect(date).to.be.a('string')
  })

  it('returns "Mon" when given new Date(2017, 5, 19)', function() {
      const date = weekday(new Date(2017, 5, 19))
      expect(date).to.be.deep.equal('Mon')
  })

  it('returns "Thu" when given new Date(2017, 5, 15)', function() {
      const date = weekday(new Date(2017, 5, 15))
      expect(date).to.be.deep.equal('Thu')
  })

})
