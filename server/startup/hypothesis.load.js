Meteor.startup(function() {
  if(Hypothesis.find().count() === 0) {
    // var hypothesis = [
    //   {
    //     'projectId':'project1',
    //     'project_name':'project1'
    //     'name': 'hypothesi 1',
    //     'test':[
    //       {
    //         'version':0,
    //         'name':'test name',
    //         'assigned_to':'person',
    //         'deadline':'date',
    //         'duration':'time',
    //         'hypothesis':'we believe that...',
    //         'test':'to very this we will...',
    //         'metric':'to verify that we will...',
    //         'criteria':'we are right if...',
    //         'state':'backlog',
    //         'result':'unclear'
    //       }
    //     ],
    //     'test_version':0,
    //     'learn':[
    //       {
    //         'version':0,
    //         'visible':false,
    //         'name':'test name',
    //         'assigned_to':'person',
    //         'deadline':'date',
    //         'duration':'time',
    //         'hypothesis':'we believe that...',
    //         'observation':'we observed...',
    //         'learning':'unclear results...',
    //         'next_steps':'continue on...',
    //         'result':'unclear'
    //       }
    //     ]
    //   }
    // ];
    // hypothesis.forEach(function(hypothesi) {
    //   Hypothesis.insert(hypothesi);
    // });
  }
});
