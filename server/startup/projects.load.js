Meteor.startup(function() {
  if(Projects.find().count() === 0) {
    // var projects = [
    //   {
    //     'name': 'project 1'
    //   },
    //   {
    //     'name': 'project 2'
    //   }
    // ];
    for (i = 0; i < 2; i++) {
      let id = Meteor.call('createProject', faker.company.companyName());
      for (x = 0; x < 1; x++) {
        Meteor.call('createHypothesis', id, faker.lorem.sentence());
      }
    }

    // projects.forEach(function(project) {
    //   Meteor.call('createProject', project.name);
    // });
  }
});
