var promisify = require('..');
var assert    = require('power-assert');

describe('promisify', () => {

  var msg;
  beforeEach(function () {
    msg = Math.random().toString();
  });

  it('calls callback', (done) => {
    var target = function (callback) {
      callback(null, msg);
    };

    promisify(target)().then(function (res) {
      assert.equal(res, msg, 'Callback was called');
      done();
    });
  });

  it('rejects when target passes an error to callback', (done) => {
    var target = function (callback) {
      callback(new Error(msg));
    };

    promisify(target)().catch(function (error) {
      assert(error, msg, error.message === msg);
      assert.equal(error.message, msg, 'Error was passed with correct message');
      done();
    });
  });

  it('rejects when target throws an error', (done) => {
    var target = function () {
      throw new Error(msg);
    };

    promisify(target)().catch(function (error) {
      assert.equal(error.message, msg, 'Error was thrown with correct message');
      done();
    });
  });

  it('handles arguments correctly', (done) => {
    var target = function (a, b, c, callback) {
      callback(null, a + b + c);
    };

    promisify(target)('foo', 'bar', 'baz', 'qux', 'quux')
      .then(function (res) {
        assert.equal(res, 'foobarbaz', 'Extra arguments are ignored');
        done();
      });
  });

  it('handles functions which uses arguments implicitly', (done) => {
    var target = function () {
      var callback = arguments[arguments.length - 1];
      callback(null, msg);
    };

    promisify(target)().then(function (res) {
      assert.equal(res, msg, 'Callback was called');
      done();
    });
  });

});
