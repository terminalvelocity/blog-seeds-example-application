import Ember from 'ember';

export default Ember.Helper.helper((params) => {
  const str = params[0];
  const limit = params[1] || 140;
  let modifiedStr = str.length > limit ? `${str.substr(0, limit)}...` : str;

  return modifiedStr;
});
