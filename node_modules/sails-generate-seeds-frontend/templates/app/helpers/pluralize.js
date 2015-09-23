import Ember from 'ember';

export default Ember.Helper.helper((params) => {

  const count = params[0];
  const plural = params[1];
  const singular = params[2];
  let word = count === 1 ? singular : plural;

  return `${count} ${word}`;
});
