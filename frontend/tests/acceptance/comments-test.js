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

module('Acceptance: Comment', {
  beforeEach: function() {
    application = startApp();
    defineFixturesFor('comment', []);
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

test('visiting /comments without data', function(assert) {
  visit('/comments');

  andThen(function() {
    assert.equal(currentPath(), 'comments.index');
    assert.equal(find('#blankslate').text().trim(), 'No Comments found');
  });
});

test('visiting /comments with data', function(assert) {
  defineFixturesFor('comment', [{ id: 1, body: 'MyString' }]);
  visit('/comments');

  andThen(function() {
    assert.equal(currentPath(), 'comments.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new comment', function(assert) {
  visit('/comments');
  click('a:contains(New Comment)');

  andThen(function() {
    assert.equal(currentPath(), 'comments.new');

    fillIn('label:contains(Body) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing comment', function(assert) {
  defineFixturesFor('comment', [{ id: 1 }]);
  visit('/comments');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'comments.edit');

    fillIn('label:contains(Body) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing comment', function(assert) {
  defineFixturesFor('comment', [{ id: 1, body: 'MyString' }]);
  visit('/comments');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'comments.show');

    assert.equal(find('p strong:contains(Body:)').next().text(), 'MyString');
  });
});

test('delete a comment', function(assert) {
  defineFixturesFor('comment', [{ id: 1, body: 'MyString' }]);
  visit('/comments');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'comments.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
