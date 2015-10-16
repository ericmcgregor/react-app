Hypothesis = new Mongo.Collection('hypothesis');

Hypothesis.allow({
  insert: function(userId, hypothesi) {
    return true;
  },
  update: function(userId, hypothesi, fields, modifier) {
    return true;
  },
  remove: function(userId, hypothesi) {
    return true;
  }
});