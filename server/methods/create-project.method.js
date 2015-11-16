'use strict';

Meteor.methods({
  createProject: function(name='new project') {
    let projectId = Projects.insert({name:name});

    // Meteor.call('createHypothesis', projectId);

    return projectId;
  },
  removeAllProjects:function(){
    Projects.remove({});
  }
});
