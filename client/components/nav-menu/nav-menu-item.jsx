
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
        <a href={'/projects/'+project._id}>
          {project.name}
        </a>
      </li>
    )
  }
})
