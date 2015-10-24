Meteor.subscribe('testCard')
Meteor.subscribe('learnings')
Meteor.subscribe('hypothesis')

AppLayout = React.createClass({

  render() {
    return (
      <div class="layout layout-row layout-fill">

          <div class="flex-25">
            <nav class="navbar navbar-light bg-faded">
              <a class="navbar-brand" href="#">Projects</a>
            </nav>
            <div id="nav-menu-target"></div>
          </div>

          <div class="flex">
            <div id="render-target"></div>
          </div>

      </div>
    );
  }

})

// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    Meteor.subscribe('projects')
    return {
      project: Projects.findOne(FlowRouter.getParam('projectId'))
    }
  },

  renderProjects() {
    // Get tasks from this.data.tasks
      if(!this.data.project ){
        return;
      }

      return <ProjectRow key={this.data.project._id} project={this.data.project} />;

  },

  addProject() {
    Meteor.call('createProject', 'new project!');
  },

  render() {
    let project = this.data.project;
    if(!project) {
      project = {}
    }
    return (<div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">{project.name}</a>
          <form className="form-inline navbar-form pull-right">
            <input className="form-control" type="text" placeholder="Search" />
            <button className="btn btn-success-outline" type="submit">Search</button>
          </form>
        </nav>
        <ul>
          {this.renderProjects()}
        </ul>
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
