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

projectRoutes = FlowRouter.group({
  name: 'projects',
  prefix: "/projects"
});


projectRoutes.route('/new-project', {
  name:'new-project',
  action(params) {
    ReactLayout.render(AppLayout, {content: <NewProjectView />})
  }
});
