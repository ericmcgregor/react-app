Meteor.startup(function(){
  if( !Meteor.users.findOne({username:'eric'}) ) {
    Accounts.createUser({
      username:'eric',
      email : 'eric.mcgregor@gmail.com',
      password : 'password',
      profile  : {}
    });
  }

  if( !Meteor.users.findOne({username:'jay'}) ) {
    Accounts.createUser({
      username:'jay',
      email : 'jay.morgan@gmail.com',
      password : 'password',
      profile  : {}
    });
  }
})
