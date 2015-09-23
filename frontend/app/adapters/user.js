import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api/v1',
  host: `${config.apiURL}`
});

