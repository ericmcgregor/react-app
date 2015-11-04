// App component - represents the whole app
NavMenu = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      projects: Projects.find({},{sort:{created:-1}}).fetch(),
    }
  },



  changePath(id) {
    FlowRouter.go('project-details', {projectId:id, test:'test'});
  },


  render() {
    return <div className="layout layout-column layout-fill">
    <ul className="list-group">
      {this.data.projects.map((project)=>{
        return <NavMenuItem key={project._id} project={project}/>
      })}
    </ul>
    <br />

    <ToggleAddProjectForm />


    </div>

  }
});

ToggleAddProjectForm = React.createClass({
  getInitialState(){
    return {
      show:false,
      name:''
    }
  },
  toggleForm() {
    console.log(this.state)
    this.setState({
      show:!this.state.show
    });
  },
  handleChange(evt){
    this.setState({
      name:evt.target.value
    });
  },

  createProject() {
  Meteor.call('createProject', this.state.name, function(err, result){
    FlowRouter.go('/projects/'+result);
  })
    this.setState({
      show:false,
      name:''
    });
  },
  componentDidUpdate() {
    let node = React.findDOMNode(this.refs.editFocus)
    node ? node.focus() : null;
  },
  componentDidMount() {
    let node = React.findDOMNode(this.refs.editFocus)
    node ? node.focus() : null;
  },
  handleKeyUp: function(e) {
    if(e.which === 13) {
      this.createProject();
    }
    if(e.which === 27) {
      this.toggleForm();
    }
 },

  renderButton() {
    return (
      <button onClick={this.toggleForm} className="btn btn-secondary-outline btn-block"><i className="fa fa-plus"></i> New Project</button>
    )
  },
  renderForm() {
    return (
      <div>
        <fieldset className="form-group">
          <input ref="editFocus" onKeyUp={this.handleKeyUp} type="text" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Project Name" />
        </fieldset>
        <fieldset className="form-group">
          <button onClick={this.createProject} className="btn btn-success-outline btn-block"><i className="fa fa-plus"></i> Create Project</button>
        </fieldset>
      </div>
    )
  },
  render(){
    return <div>
      {this.state.show ? this.renderForm() : this.renderButton()}
    </div>
  }
})

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

  render(project=this.props.project) {
    let classes='list-group-item hover-remove ';
    // if(FlowRouter.getParam('projectId') === this.props.project._id) {
    //   classes = classes+' active';
    // }

    return (
      <li key={project._id} className={classes}>
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
