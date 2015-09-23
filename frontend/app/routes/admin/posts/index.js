import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('post', {sort: 'createdAt DESC'});
  },
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  }
});
