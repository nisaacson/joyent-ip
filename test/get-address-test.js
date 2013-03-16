var inspect = require('eyespect').inspector();
var should = require('should');
var joyentIP =  require('../index')
describe('Get Addresses', function () {
  it('should get all addresses', function () {
    var ips = joyentIP.getAll()
    inspect(ips,'ips')
    Object.keys(ips).length.should.be.above(0)
  })
  it('should get the internal address', function () {
    var ip = joyentIP.getInternal()
    should.exist(ip, 'internal ip not found')
  })
})
