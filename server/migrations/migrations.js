Migrations.add({
  version: 1,
  name: 'Migrating projects with no createdby',
  up: function() {
    let userId = Meteor.users.findOne({username:'eric'})._id;
    Projects.find({
      "createdBy" : { "$exists" : false }
    })
    .forEach(function(doc){

      let update = Projects.update(doc._id, {
        '$set':{
          'createdBy':userId
        }
      });

      console.log('updated '+update);
    })
  },
  down: function() {

  }
});

Migrations.add({
  version: 2,
  name: 'adding createdBy to any other documents by parent project',
  up: function() {
    let userId = Meteor.users.findOne({username:'eric'})._id;
    Projects.find()
    .forEach(function(project){


        Hypothesis.update({projectId:project._id}, {
          '$set':{
            'createdBy':project.createdBy
          }
        }, {
          'multi':true
        });
        TestCard.update({projectId:project._id}, {
          '$set':{
            'createdBy':project.createdBy
          }
        }, {
          'multi':true
        });

    })
  },
  down: function() {

  }
});

Migrations.add({
  version: 3,
  name: 'adding projectId to learning cards',
  up: function() {
    Learnings.find()
    .forEach(function(learning){

        var test = TestCard.findOne(learning.testCardId);

        Learnings.update(learning._id, {
          '$set':{
            'projectId':test.projectId,
            'createdBy':test.createdBy,
          }
        });


    })
  },
  down: function() {

  }
});
