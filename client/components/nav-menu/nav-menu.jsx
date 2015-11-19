SideNav = React.createClass({
  getDefaultProps(){
    return {
      open:true
    }
  },
  getInitialState() {
    let open = this.props.open ? this.props.open : false;
    return {
      open:open
    }
  },
  close(){
    this.setState({
      open:!this.state.open
    })
  },
  renderOpen() {
    return (
      <div className="side-nav">
        <div className="side-nav-footer">
          <nav className="navbar ">
            <button className="navbar-toggler" >
              <i
                className="fa fa-bars"
                onClick={this.close} />
            </button>
            <span className="navbar-brand">Projects</span>
          </nav>
        </div>
        <div className="side-nav-menu p-a">
          <NavMenu />
        </div>

      </div>
    )
  },
  renderClosed() {
    return(
      <div className="side-nav">
        <div className="side-nav-footer">
          <nav className="navbar ">
            <button className="navbar-toggler" >
              <i
                className="fa fa-bars"
                onClick={this.close} />
            </button>
          </nav>

        </div>
      </div>
    )
  },
  render(){
    return(
      <div id="side-nav-layout" className={this.state.open ? 'null' : 'closed'}>
        {this.state.open==true? this.renderOpen() : this.renderClosed()}
    </div>
    )
  }
})

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
    FlowRouter.go('project-details', {projectId:id});
  },


  render() {
    return <div>

      <div className="dropdown-menu" style={{position:'static',display:'block'}}>
        <h6 className="dropdown-header">My Projects</h6>

        {this.data.projects.map((project)=>{
          return (
            <a key={project._id} href={'/projects/'+project._id} className="dropdown-item">{project.name}</a>
          )
        })}
        <div className="dropdown-divider" />
          <a className="dropdown-item" href="/projects">
            Project Dashboard
          </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/new-project">
          Create Project
        </a>
      </div>

    </div>

  }
});
//<ToggleAddProjectForm />

ToggleAddProjectForm = React.createClass({
  getInitialState(){
    return {
      show:false,
      name:''
    }
  },

  mixins:[FormFocusMixin],

  toggleForm() {
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

  handleKeyEnter(){
    this.createProject();
  },
  handleKeyEscape(){
    this.toggleForm();
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
          <input ref="editFocus" onBlur={this.handleKeyEscape} onKeyUp={this.handleKeyUp} type="text" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Project Name" />
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

//<span className="label label-default label-pill pull-right">14</span>
// href={'/projects/'+project._id}
