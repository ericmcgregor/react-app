'use strict'

Meteor.publish('projects', function(options={}, searchString) {
  if(!searchString) {
    searchString = '';
  }
  if(!options.sort) {
    options.sort= {
        created: -1
      }
  }
  Counts.publish(this, 'numberOfProjects', Projects.find({
    createdBy: this.userId,
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }), {noReady: true});

  return Projects.find({
    createdBy: this.userId,
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }, options);
});
Projects.before.insert(function (userId, doc) {
    doc.createdBy = userId;
    doc.created = Date.unow();
});
Projects.after.remove(function(userId, project){
  Hypothesis.remove({projectId:project._id});
});
