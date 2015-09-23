import Ember from 'ember';

export default Ember.Helper.helper((params) => {

  const count = params[0];
  const singular = params[1];
  let word = count === 1 ? singular : Ember.String.pluralize(singular);

  return `${count} ${word}`;
});
