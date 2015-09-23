import Ember from "ember";
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
      return Ember.Object.create({});
  },
  actions: {
    register(model) {
      Ember.$.ajax({
        url: `${config.apiURL}/signup`,
        type: 'POST',
        data: JSON.stringify({
          email: model.get('email'),
          password: model.get('password'),
          confirmPassword: model.get('confirmPassword')
        }),
        contentType: 'application/json'
      }).then((response) => {
        this.transitionTo('login');
      }, (xhr, status, error) => {
        this.set('errorMessage', error);
      });
    }
  }
});
