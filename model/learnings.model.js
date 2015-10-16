Learnings = new Mongo.Collection('learnings');

Learnings.allow({
  insert: function(userId, learning) {
    return true;
  },
  update: function(userId, learning, fields, modifier) {
    return true;
  },
  remove: function(userId, learning) {
    return true;
  }
});
