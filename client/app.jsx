Meteor.subscribe('testCard')
Meteor.subscribe('learnings')
Meteor.subscribe('hypothesis')
Meteor.subscribe('projects');
Meteor.subscribe('people');






if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    // ReactDOM.render(<SideNav />, document.getElementById("side-nav-target"));
    // ReactDOM.render(<App />, document.getElementById("render-target"));
    // ReactDOM.render(<NavMenu />, document.getElementById("nav-menu-target"));
  });
}
