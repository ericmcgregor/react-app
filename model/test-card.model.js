TestCard = new Mongo.Collection('testCard');

TestCard.allow({
  insert: function(userId, testCard) {
    return true;
  },
  update: function(userId, testCard, fields, modifier) {
    return true;
  },
  remove: function(userId, testCard) {
    return true;
  }
});
