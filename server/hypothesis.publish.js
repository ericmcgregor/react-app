'use strict'

Meteor.publish('hypothesis', function(options, searchString) {
  if(!searchString) {
    searchString = '';
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

Hypothesis.after.remove(function(userId, hypothesis){
  TestCard.remove({hypothesiId:hypothesis._id});
});
