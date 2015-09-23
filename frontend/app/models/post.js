import DS from 'ember-data';

const Post = DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  title: DS.attr('string'),
  body: DS.attr('string')
});

export default Post;
