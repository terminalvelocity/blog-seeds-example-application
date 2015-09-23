import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

function defineFixturesFor(name, fixtures) {
  var modelClass = application.__container__.lookupFactory('model:' + name);
  modelClass.FIXTURES = fixtures;
}

module('Acceptance: Post', {
  beforeEach: function() {
    application = startApp();
    defineFixturesFor('post', []);
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /posts without data', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentPath(), 'posts.index');
    assert.equal(find('#blankslate').text().trim(), 'No Posts found');
  });
});

test('visiting /posts with data', function(assert) {
  defineFixturesFor('post', [{ id: 1, title: 'MyString', body: 'MyString' }]);
  visit('/posts');

  andThen(function() {
    assert.equal(currentPath(), 'posts.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new post', function(assert) {
  visit('/posts');
  click('a:contains(New Post)');

  andThen(function() {
    assert.equal(currentPath(), 'posts.new');

    fillIn('label:contains(Title) input', 'MyString');
    fillIn('label:contains(Body) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing post', function(assert) {
  defineFixturesFor('post', [{ id: 1 }]);
  visit('/posts');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'posts.edit');

    fillIn('label:contains(Title) input', 'MyString');
    fillIn('label:contains(Body) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing post', function(assert) {
  defineFixturesFor('post', [{ id: 1, title: 'MyString', body: 'MyString' }]);
  visit('/posts');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'posts.show');

    assert.equal(find('p strong:contains(Title:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Body:)').next().text(), 'MyString');
  });
});

test('delete a post', function(assert) {
  defineFixturesFor('post', [{ id: 1, title: 'MyString', body: 'MyString' }]);
  visit('/posts');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'posts.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
