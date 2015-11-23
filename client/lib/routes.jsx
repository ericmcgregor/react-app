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

function setRouteHistory(context) {
    console.log(context)
    Session.set({'lastRoute':context.path})
}
FlowRouter.triggers.enter([loginRedirect]);
FlowRouter.triggers.exit([setRouteHistory])
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

FlowRouter.route('/settings', {
  name:'settings',
  action(params) {
    ReactLayout.render(AppLayout, {content: <SettingsView />})
  }
});


let projectRoutes = FlowRouter.group({
  name: 'projects',
  prefix: "/projects"
});

projectRoutes.route('/', {
  name:'projects-list',
  action:function(){
    ReactLayout.render(AppLayout, {content:<ProjectListView />, options:<ProjectNavOptions />})
  },
  triggersEnter:[function(){
    Session.set({'navtitle':'Projects'})
  }]
})
projectRoutes.route('/new-project', {
  name:'new-project',
  action(params) {
    ReactLayout.render(AppLayout, {content: <NewProjectView />})
  }
});




FlowRouter.route('/projects/:projectId', {
  name:'project-details',
  action:function(params){
    ReactLayout.render(AppLayout, {content: <ProjectDetailView projectId={params.projectId}/>, options:<ProjectDetailNavOptions />})
  }
})
FlowRouter.route('/projects/:projectId/:hypothesisId', {
  name:'project-details-hypothesis',
  action:function(params){
    ReactLayout.render(AppLayout, {content: <HypothesisDetailView hypothesisId={params.hypothesisId}/>, options:<HypothesisDetailNavOptions />})
  }
})
