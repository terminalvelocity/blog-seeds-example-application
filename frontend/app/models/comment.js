import DS from 'ember-data';

const Comment = DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  body: DS.attr('string')
});

export default Comment;
