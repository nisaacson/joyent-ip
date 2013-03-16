var inspect = require('eyespect').inspector();
var should = require('should');
var joyentIP =  require('../index')
describe('Get Addresses', function () {
  it('should get all addresses', function (done) {
    var ips = joyentIP.getAll()
    inspect(ips,'ips')
    Object.keys(ips).length.should.be.above(0)
  })
})
