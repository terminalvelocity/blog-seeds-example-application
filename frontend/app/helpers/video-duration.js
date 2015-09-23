import Ember from 'ember';

export default Ember.Helper.helper((seconds) => {
  const time = new Date(seconds * 1000);
  const formattedTime = time.toISOString().substr(11, 8);
  return formattedTime.startsWith("00") ? formattedTime.substr(3) : formattedTime;
});
