'use strict';

Meteor.methods({
  createHypothesis: function(projectId, name="new hypothesis") {
    let project = Projects.find(projectId);

    let hypothesi = {
        'projectId':projectId,
        'name': name,
        'test_version':0,
      }
      // let test_card = [
      //     {
      //       'version':0,
      //       'name':'test name',
      //       'assigned_to':'person',
      //       'deadline':'date',
      //       'duration':'time',
      //       'hypothesis':hypothesi.name,
      //       'test':'to very this we will...',
      //       'metric':'to verify that we will...',
      //       'criteria':'we are right if...',
      //       'state':'backlog',
      //       'result':'unclear',
      //       'learning':{
      //         'observation':'we observed...',
      //         'learning':'unclear results...',
      //         'next_steps':'continue on...',
      //       }
      //
      //     }
      //   ]
      //
      //   hypothesi.test_card = test_card;
      let hypothesiId = Hypothesis.insert(hypothesi);

      Meteor.call('createTestCard', hypothesiId)

      return hypothesiId;

  }
});
