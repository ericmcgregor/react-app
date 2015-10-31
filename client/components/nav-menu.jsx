// App component - represents the whole app
NavMenu = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      projects: Projects.find().fetch(),
    }
  },

  createProject() {
    Meteor.call('createProject', 'New Project')
  },

  changePath(id) {
    FlowRouter.go('project-details', {projectId:id, test:'test'});
  },


  render() {
    return <div>
    <ul className="list-group">
      {this.data.projects.map((project)=>{
        return <NavMenuItem key={project._id} project={project} />
      })}
    </ul>
    <button className="btn btn-success-outline btn-block" onClick={this.createProject}>create project</button>

    </div>

  }
});
NavMenuItem = React.createClass({
  getInitialState() {
    return {
      toggleRemove:false
    }
  },
  removeProject() {
    Projects.remove(this.props.project._id);
  },
  toggleRemove(){
    this.setState({
      toggleRemove:!this.state.toggleRemove
    });
  },

  render() {
    let project = this.props.project;
    return (
      <li key={project._id} className="list-group-item hover-remove">
        <span className="label label-default label-pill pull-right" onClick={this.removeProject}>x</span>
        <a href={'/projects/'+project._id}>
          {project.name}
        </a>
      </li>
    )
  }
})
//<span className="label label-default label-pill pull-right">14</span>
// href={'/projects/'+project._id}
