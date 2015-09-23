import Ember from 'ember';

export default Ember.Helper.helper((params) => {
  const sentence = params[0] || "";
  const titleized = sentence.w().map((word) => { return word.capitalize(); }).join(' ');
  return `${titleized}`;
});
