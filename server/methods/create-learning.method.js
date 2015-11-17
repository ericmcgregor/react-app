'use strict';

Meteor.methods({
  createLearning: function(testCardId) {
    let testCard = TestCard.findOne(testCardId);

      let learning = {
            'projectId':testCard.projectId,
            'testCardId':testCard._id,
            'hypothesiId':testCard.hypothesiId,
            'observation':'', //we observed...
            'learning':'', //unclear results...
            'next_steps':'', //continue on...
            'result':'',
            'learningTest':{}
          }

    let learningId = Learnings.insert(learning);
    return learningId;
  }
});
