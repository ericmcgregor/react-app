Meteor.startup(function() {
  // Learnings.find().fetch().forEach(function(doc){
  //   if(!doc.learningTest) {
  //     Learnings.update({
  //       _id:{$eq:doc._id}
  //     }, {
  //       $set:{
  //         learningTest:{}
  //       }
  //     });
  //   }
  // })
  // if(Learnings.find().count() === 0) {
  //   var learnings = [
  //     {
  //       'name': 'learning 1'
  //     },
  //     {
  //       'name': 'learning 2'
  //     }
  //   ];
  //   learnings.forEach(function(learning) {
  //     Learnings.insert(learning);
  //   });
  // }
});
