Projects = new Mongo.Collection('projects');

Projects.allow({
  insert: function(userId, project) {
    return !! userId;
  },
  update: function(userId, project, fields, modifier) {
    return !! userId;
  },
  remove: function(userId, project) {
    return !! userId;
  }
});
