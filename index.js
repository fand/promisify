function promisify (target) {
  return function () {
    // # of args except callback
    var argsNum = target.length - 1;
    if (target.length === 0) {
      argsNum = arguments.length;
    }

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
