import Ember from "ember";

export default Ember.Route.extend({
  model() {
      return Ember.Object.create({});
  },
  session: Ember.inject.service('session'),
  actions: {
    authenticate(model) {
      this.get('session').authenticate('simple-auth-authenticator:jwt', model).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});