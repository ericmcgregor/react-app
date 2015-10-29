// App component - represents the whole app
NavMenu = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {

    return {
      projects: Projects.find({}, {
        sort:{
          '_id':1
        }
      }).fetch(),
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
        return <li key={project._id} className="list-group-item">
          <a href={'/projects/'+project._id}>{project.name}</a>
        </li>
      })}
    </ul>
    <button className="btn btn-success-outline btn-block" onClick={this.createProject}>create project</button>

    </div>

  }
});

//<span className="label label-default label-pill pull-right">14</span>
// href={'/projects/'+project._id}
