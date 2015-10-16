'use strict';

Meteor.methods({
  expandAll: function(projectId, expanded) {

      TestCard.update({
        projectId:{$eq:projectId}
      }, {
        $set:{
          expanded:expanded,
        }
      },{
        multi:true
      });

  },
  getAvatar: function(){
      return faker.image.avatar();
  }
});
