ProjectHeader = React.createClass({
  removeProject() {
    FlowRouter.go('/projects');

    Projects.remove(this.props.project._id, function(err, id){
    });
  },

  handleChangeNavTitle(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;

    Projects.update({
      _id:this.props.project._id
    }, {
      $set:state
    });
  },

  render(){
    return (
      <div className="project-header m-y">
        <div className="row">

        <div className="col-md-12">
          <form className="form-inline navbar-form pull-right m-l">
              <div className="form-group">
                <div className="btn-group pull-right btn-group" role="group" aria-label="Third group">
                  <button type="button" className="btn btn-secondary" onClick={this.removeProject}><i className="fa fa-trash-o"></i></button>
                </div>
              </div>
            </form>


        </div>
        </div>
      </div>
    )
  }
})
// <AddHypothesisForm project={this.props.project} view="nav" show={this.props.shouldRender} />
// <div className="col-md-6">
//   <EditNavTitleMixin title={this.props.project.name} handleChange={this.handleChangeNavTitle.bind(this, 'name', null)} />
// </div>
