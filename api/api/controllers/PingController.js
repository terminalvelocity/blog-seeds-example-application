/**
 * PingController
 * @description :: Server-side logic for checking if different part of app is alive
 */

module.exports = {
  /**
   * Useful when need to check if it's server is down or it some logic is broken
   */
  index: function (req, res) {
    res.status(200);
    res.ok('Server is up');
  }
};
