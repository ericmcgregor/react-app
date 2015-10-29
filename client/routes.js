  // Use Meteor.startup to render the component after the page is ready
//   FlowRouter.route('/projects', {
//   action(params) {
//     const containerElement = document.getElementById("render-target");
//     React.render(<App />, containerElement);
//   }
// });
  // FlowRouter.route('/projects', {
  //     action: function(params, queryParams) {
  //       React.render(<App />, document.getElementById("render-target"));
  //     }
  // });
FlowRouter.route('/', {
  action(params) {
  }
});

let projectRoutes = FlowRouter.group({
  prefix: "/projects"
});

projectRoutes.route('/', {
  name:'projects-list',
  action:function(){
  }
})
projectRoutes.route('/:projectId', {
  name:'project-details',
  action:function(params){

  }
})
