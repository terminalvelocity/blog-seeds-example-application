import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('post', {sort: 'createdAt DESC', limit: 5});
  },
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  }
});
