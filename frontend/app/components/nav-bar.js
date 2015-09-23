import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: "ui fixed teal inverted menu".w(),
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});