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


function loginRedirect(context, redirect) {
  if(!Meteor.userId() && context.path !== '/login') {
    return redirect('/login')
  }
  if(Meteor.userId() && context.path == '/login') {
    return redirect('/projects')
  }
}

FlowRouter.triggers.enter([loginRedirect]);

FlowRouter.route('/login', {
  action(params) {
    ReactLayout.render(LoginView, {})
  }

});

FlowRouter.route('/', {
  action(params) {
    ReactLayout.render(AppLayout, {})
  }
});

FlowRouter.route('/new-project', {
  action(params) {
    ReactLayout.render(AppLayout, {content: <NewProjectView />})
  }
});

let projectRoutes = FlowRouter.group({
  prefix: "/projects"
});

projectRoutes.route('/', {
  name:'projects-list',
  action:function(){
    ReactLayout.render(AppLayout, {})
  }
})
projectRoutes.route('/:projectId', {
  name:'project-details',
  action:function(params){
    ReactLayout.render(AppLayout, {content: <ProjectDetailView />})
  }
})
