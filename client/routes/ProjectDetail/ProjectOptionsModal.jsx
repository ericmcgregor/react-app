

ProjectOptionsModal = React.createClass({
  removeProject() {
    $('#myModal').on('hide.bs.modal', function (e) {
      FlowRouter.go('/projects');
    })
    Projects.remove(FlowRouter.getParam('projectId'), function(err, id){});

    $('#myModal').modal('toggle');

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
