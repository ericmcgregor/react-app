Meteor.subscribe('testCard')
Meteor.subscribe('learnings')
Meteor.subscribe('hypothesis')
Meteor.subscribe('projects');
Meteor.subscribe('people');


// App component - represents the whole app
App = React.createClass({
  getInitialState () {
      return {
        text: '',
        editing: true
      }
    },

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    let projectId = FlowRouter.getParam('projectId');
    return {
      project: Projects.findOne(projectId)
    }
  },


  createHypothesis() {
    Meteor.call('createHypothesis', this.data.project._id);
  },

  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;

    Projects.update({
      _id:this.data.project._id
    }, {
      $set:state
    });
  },
  removeProject() {
    Projects.remove(FlowRouter.getParam('projectId'));
  },
  renderContent() {

    return <div>
      <nav className="navbar navbar-light bg-faded">
          <EditNavTitleMixin title={this.data.project.name} handleChange={this.handleChange.bind(this, 'name', null)} />
          <div className="dropdown pull-right">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Options
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <a className="dropdown-item" href="#" onClick={this.createHypothesis}>Add hypothesis</a>
              <a className="dropdown-item" href="#" onClick={this.removeProject}>Remove Project</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
      </nav>

      <ProjectRow key={this.data.project._id} project={this.data.project} />
    </div>
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






// AppLayout = React.createClass({
//
//   render() {
//     return (
//       <div class="layout layout-row layout-fill">
//
//           <div class="flex-25">
//             <nav class="navbar navbar-light bg-faded">
//               <a class="navbar-brand" href="#">Projects</a>
//             </nav>
//             <NavMenu />
//           </div>
//
//           <div class="flex">
//             <App />
//           </div>
//
//       </div>
//     );
//   }
//
// })
