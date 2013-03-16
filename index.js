var os = require('os');
var ifaces = os.networkInterfaces();
var output = {}

module.exports = {
  getAll: getAll,
  getInternal: getInternal,
  getExternal: getExternal
}

function getAll() {
  for (var dev in ifaces) {
    var alias = 0;
    ifaces[dev].forEach(function(details){
      if (details.family === 'IPv4') {
        var address = details.address
        output[dev] = address
      }
    });
  }
  return output
}
function getInternal() {
  for (var dev in ifaces) {
    var alias = 0;
    ifaces[dev].forEach(function(details){
      if (details.family === 'IPv4') {
        var address = details.address
        output[dev] = address
      }
    });
  }
  return output['eth1']
}
function getExternal() {
  for (var dev in ifaces) {
    var alias = 0;
    ifaces[dev].forEach(function(details){
      if (details.family === 'IPv4') {
        var address = details.address
        output[dev] = address
      }
    });
  }
  return output['eth0']
}
