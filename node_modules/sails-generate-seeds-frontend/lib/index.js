/**
 * sails-generate-seeds-frontend
 *
 * Usage:
 * + Called by `sails generate seeds-frontend`
 *
 * @type {Object}
 */

module.exports = {

  templatesDirectory: require('path').resolve(__dirname, '../templates'),
  before: require('./before'),
  targets: {
    './app/adapters': {folder: {}},
    './app/components': {folder: {}},
    './app/controllers': {folder: {}},
    './app/helpers': {folder: {}},
    './app/models': {folder: {}},
    './app/routes': {folder: {}},
    './app/serializers': {folder: {}},
    './app/styles': {folder: {}},
    './app/templates/components': {folder: {}},
    './app/templates/layouts': {folder: {}},
    './app/views': {folder: {}},
    './config': {folder: {}},
    './public': {folder: {}},
    './tests/helpers': {folder: {}},
    './tests/unit': {folder: {}},
    './vendor': {folder: {}},

    './app/adapters/application.js': {copy: 'app/adapters/application.js'},
    './app/helpers/phone-number.js': {copy: 'app/helpers/phone-number.js'},
    './app/helpers/pluralize.js': {copy: 'app/helpers/pluralize.js'},
    './app/helpers/video-duration.js': {copy: 'app/helpers/video-duration.js'},
    './app/mixins/reset-scroll.js': {copy: 'app/mixins/reset-scroll.js'},
    './app/mixins/save-model-mixin.js': {copy: 'app/mixins/save-model-mixin.js'},
    './app/serializers/application.js': {copy: 'app/serializers/application.js'},
    './app/styles/app.css': {copy: 'app/styles/app.css'},
    './app/templates/layouts/-footer.hbs': {copy: 'app/templates/layouts/-footer.hbs'},
    './app/templates/layouts/-nav.hbs': {copy: 'app/templates/layouts/-nav.hbs'},
    './app/templates/about.hbs': {copy: 'app/templates/about.hbs'},
    './app/templates/application.hbs': {copy: 'app/templates/application.hbs'},
    './app/templates/index.hbs': {copy: 'app/templates/index.hbs'},
    './app/app.js': {copy: 'app/app.js'},
    './app/index.html': {copy: 'app/index.html'},
    './app/router.js': {copy: 'app/router.js'},

    // './config/environment.js': {template: 'config/environment.js'},
    './config/environment.js': {copy: 'config/environment.js'},

    './public/crossdomain.xml': {copy: 'public/crossdomain.xml'},
    './public/robots.txt': {copy: 'public/robots.txt'},

    './tests/helpers/resolver.js': {copy: 'tests/helpers/resolver.js'},
    './tests/helpers/start-app.js': {copy: 'tests/helpers/start-app.js'},
    './tests/.jshintrc': {copy: 'tests/.jshintrc'},
    './tests/index.html': {copy: 'tests/index.html'},
    './tests/test-helper.js': {copy: 'tests/test-helper.js'},

    './.bowerrc': {copy: '.bowerrc'},
    './.editorconfig': {copy: '.editorconfig'},
    './.ember-cli': {copy: '.ember-cli'},
    './.gitignore': {copy: '.gitkeep'},
    './.jshintrc': {copy: '.jshintrc'},
    './.travis.yml': {copy: '.travis.yml'},
    './.watchmanconfig': {copy: '.watchmanconfig'},
    './bower.json': {copy: 'bower.json'},
    './ember-cli-build.js': {copy: 'ember-cli-build.js'},
    './package.json': {copy: 'package.json'},
    './README.md': {copy: 'README.md'},
    './testem.json': {copy: 'testem.json'}
  }
};

