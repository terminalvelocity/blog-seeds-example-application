import Ember from 'ember';

export default Ember.Handlebars.helper((seconds) => {
  let time = new Date(seconds * 1000);
  let formattedTime = time.toISOString().substr(11, 8);
  return formattedTime.startsWith("00") ? formattedTime.substr(3) : formattedTime;
});
