'use strict'

Meteor.publish('learnings', function(options, searchString) {
  if(!searchString) {
    searchString = '';
  }
  Counts.publish(this, 'numberOfLearnings', Learnings.find({
    '_id': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }), {noReady: true});
  return Learnings.find({
    '_id': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }, options);
});

Learnings.after.update(function(userId, learning, fieldNames, modifier, options){
  // TestCard.remove({hypothesiId:hypothesis._id});
  let state = 'learning';

  if(fieldNames[0]==='result' && !modifier.$set.result) {
    state = 'measure';
  }
  TestCard.update({
    _id:{$eq:learning.testCardId}
  }, {
    $set:{
      state:state
    }
  });
});
