Meteor.startup(function(){
  Migrations.migrateTo('latest');
})

// Learnings.find()
// .forEach(function(learning){
//
//     var test = TestCard.findOne(learning.testCardId);
//     console.log(test);
//
//   });
