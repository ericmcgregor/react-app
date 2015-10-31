'use strict'

Meteor.publish('testCard', function(options={}, searchString) {
  if(!searchString) {
    searchString = '';
  }
  if(!options.sort) {
    options.sort= {
        date_created: -1
      }
  }
  Counts.publish(this, 'numberOfTestCard', TestCard.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }), {noReady: true});
  return TestCard.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }, options);
});


TestCard.after.remove(function(userId, testCard){
  Learnings.remove({testCardId:testCard._id});
});
TestCard.before.update(function(userId, testCard, fieldNames, modifier, options){
  if(fieldNames[0]==='state' && modifier.$set.state==='measure'){
    let learning = Learnings.findOne({testCardId:testCard._id});
    if(!learning.result) {
      modifier.$set.expanded = true;
    }
  }
});
