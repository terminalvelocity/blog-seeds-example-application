/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    codemirror: {
      modes: ['javascript', 'markdown', 'ruby'],
      keyMaps: ['vim', 'sublime'],
      themes: ['solarized']
    }
  });

  app.import(`${app.bowerDirectory}/codemirror/addon/edit/closebrackets.js`);
  app.import(`${app.bowerDirectory}/codemirror/addon/edit/continuelist.js`);

  return app.toTree();
};
