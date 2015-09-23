import Ember from 'ember';

export default Ember.Helper.helper((number) => {

  const length = number.toString().length;
  const regex = new Map([
    [11, /(\d{1})(\d{3})(\d{3})(\d{4})/],
    [10, /(\d{3})(\d{3})(\d{4})/]
  ]);
  const formats = new Map([
    [11, '$1 ($2) $3-$4'],
    [10, '($1) $2-$3']
  ]);

  return String(number).replace(regex.get(length), formats.get(length));
});
