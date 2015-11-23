Meteor.methods({
  navBack:function(){
    let route = Session.get('routeParent') ? Session.get('routeParent') : Session.get('lastRoute')
    FlowRouter.go(route)
  }
})
