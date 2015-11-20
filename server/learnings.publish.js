'use strict'

Meteor.publish('learnings', function(options={}, searchString) {
  if(!searchString) {
    searchString = '';
  }
  if(!options.sort) {
    options.sort= {
        created: -1
      }
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
Learnings.before.insert(function (userId, doc) {
    doc.created = Date.unow();
});
Learnings.before.update(function(userId, learning, fieldNames, modifier, options){
  if(fieldNames[0]==='result'){
    if(modifier.$set.result === learning.result) {
      modifier.$set.result='';
    }
  }
});
Learnings.after.update(function(userId, learning, fieldNames, modifier, options){
  // TestCard.remove({hypothesiId:hypothesis._id});
  // let state = learning.result;
  //
  // if(fieldNames[0]==='result' && !modifier.$set.result) {
  //   state = 'measure';
  // }
  // TestCard.update({
  //   _id:{$eq:learning.testCardId}
  // }, {
  //   $set:{
  //     state:state
  //   }
  // });
});
