

ProjectOptionsModal = React.createClass({
  removeProject() {
    FlowRouter.go('/projects');
    Projects.remove(this.props.project._id, function(err, id){});
  },
  render(){
    return(
      <div>
        <div className="modal-body">
          <button type="button" className="btn btn-danger btn-block" onClick={this.removeProject}><i className="fa fa-trash-o"></i> Delete Project</button>
        </div>
      </div>
    )
  }
})
