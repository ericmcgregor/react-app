Meteor.startup(function() {
  if(People.find().count() === 0) {
    var people = [
      {
        'name': faker.name.firstName()+' '+faker.name.lastName(),
        'image':faker.image.avatar()
      },
      {
        'name': faker.name.firstName()+' '+faker.name.lastName(),
        'image':faker.image.avatar()
      },
      {
        'name': faker.name.firstName()+' '+faker.name.lastName(),
        'image':faker.image.avatar()
      }
    ];
    people.forEach(function(person) {
      People.insert(person);
    });
  }
});
