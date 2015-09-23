import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'simple-auth-authorizer:token',
  coalesceFindRequests: true,
  namespace: 'api/v1',
  host: `${config.apiURL}`
});