'use strict';

Meteor.methods({
  createHypothesis: function(projectId, name="new hypothesis") {
    let project = Projects.find(projectId);

    let hypothesi = {
        'projectId':projectId,
        'name': name,
        'test_version':0,
      }

      let hypothesiId = Hypothesis.insert(hypothesi);

      Meteor.call('createTestCard', hypothesiId)

      return hypothesiId;

  }
});
