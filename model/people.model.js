People = new Mongo.Collection('people');

People.allow({
  insert: function(userId, person) {
    return true;
  },
  update: function(userId, person, fields, modifier) {
    return true;
  },
  remove: function(userId, person) {
    return true;
  }
});