var promisify = require('..');
var assert    = require('power-assert');

describe('promisify', () => {

  it('calls callback', (done) => {
    var target = function (callback) {
      callback(null, 'res');
    };

    promisify(target)(1, 2, 2, 3).then(function (res) {
      assert.equal(res, 'res', 'Callback was called');
      done();
    });
  });

});
