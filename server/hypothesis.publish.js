'use strict'

Meteor.publish('hypothesis', function(options={}, searchString) {
  if(!searchString) {
    searchString = '';
  }
  if(!options.sort) {
    options.sort= {
        created: -1
      }
  }
  Counts.publish(this, 'numberOfHypothesis', Hypothesis.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }), {noReady: true});
  return Hypothesis.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }, options);
});


Hypothesis.before.insert(function (userId, doc) {
    doc.created = Date.unow();
});
Hypothesis.after.remove(function(userId, hypothesis){
  TestCard.remove({hypothesiId:hypothesis._id});
});
