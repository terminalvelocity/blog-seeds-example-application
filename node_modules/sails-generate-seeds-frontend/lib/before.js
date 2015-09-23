/**
 * Module dependencies
 */

// var util = require('util')
// var crypto = require('crypto');
var _ = require('lodash');

// Make _.defaults recursive
_.defaults = require('merge-defaults');

/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {
  //
  // Validate custom scope variables which
  // are required by this generator.
  //
  //
  if (!scope.rootPath) {
    return cb(new Error(
      'Missing scope variable: `rootPath`\n' +
      'Please make sure it is specified and try again.'
    ));
  }

  cb();
};
