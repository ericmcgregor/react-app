'use strict'

Meteor.publish('projects', function(options, searchString) {
  if(!searchString) {
    searchString = '';
  }
  Counts.publish(this, 'numberOfProjects', Projects.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }), {noReady: true});
  return Projects.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }, options);
});

Projects.after.remove(function(userId, project){
  Hypothesis.remove({projectId:project._id});
});
