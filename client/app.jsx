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

AppLayout = React.createClass({
  render(){
    console.log(this.props.content)
    return (
      <div id="app-container">

        <div id="global-nav-layout">
          <nav className="navbar navbar-light bg-faded">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/projects">Projects <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </nav>
        </div>


      <div id="app-content-layout">

        <SideNav />


        <div id="main-content-layout">
          {this.props.content}
        </div>

        </div>
      </div>
    );
  }
})

if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    // ReactDOM.render(<SideNav />, document.getElementById("side-nav-target"));
    // ReactDOM.render(<App />, document.getElementById("render-target"));
    // ReactDOM.render(<NavMenu />, document.getElementById("nav-menu-target"));
  });
}
