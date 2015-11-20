'use strict'

Meteor.publish('testCard', function(options={}, searchString) {
  if(!searchString) {
    searchString = '';
  }
  if(!options.sort) {
    options.sort= {
        created: -1
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

TestCard.before.insert(function (userId, doc) {
    doc.created = Date.unow();
});
TestCard.after.remove(function(userId, testCard){
  Learnings.remove({testCardId:testCard._id});
});
TestCard.before.update(function(userId, testCard, fieldNames, modifier, options){
  if(fieldNames[0]==='state'){
    if(modifier.$set.state === testCard.state) {
      modifier.$set.state='';
    }
  }
});
