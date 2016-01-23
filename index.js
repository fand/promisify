function promisify (target) {
  // # of args except callback
  var argsNum = target.length - 1;

  return function () {
    // Get required arguments
    var args = [].slice.call(arguments, 0, argsNum);

    return new Promise(function (resolve, reject) {
      target.apply(null, [].concat(args, function (err, result) {
        if (err) { reject(err); }
        resolve(result);
      }));
    });
  };
}

module.exports = promisify;
