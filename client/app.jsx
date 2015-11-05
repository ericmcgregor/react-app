Meteor.subscribe('testCard')
Meteor.subscribe('learnings')
Meteor.subscribe('hypothesis')
Meteor.subscribe('projects');
Meteor.subscribe('people');


// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    let projectId = FlowRouter.getParam('projectId');
    return {
      project: Projects.findOne(projectId)
    }
  },


  renderContent() {
    return <ProjectContainer key={this.data.project._id} project={this.data.project} />
  },

  render() {
    return (
      <div>
        {this.data.project? this.renderContent() : <p>Loading...</p>}
      </div>
    );
  }
});



if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
    React.render(<NavMenu />, document.getElementById("nav-menu-target"));
  });
}
