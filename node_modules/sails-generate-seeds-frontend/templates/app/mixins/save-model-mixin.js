import Ember from 'ember';

export default Ember.Mixin.create({
  deactivate() {
    if (this.currentModel.get('isNew')) {
      this.currentModel.destroyRecord();
    } else {
      this.currentModel.rollbackAttributes();
    }
  },
  actions: {
    save() {
      this.currentModel.save().then(() => {
        this.transitionTo(this.routeName.split('.')[0]);
      }, () => {
        console.log('Failed to save the model');
      });
    }
  }
});
