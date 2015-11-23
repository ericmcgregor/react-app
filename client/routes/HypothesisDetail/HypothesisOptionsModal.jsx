HypothesisOptionsModal = React.createClass({
  removeHypothesis() {
    // FlowRouter.go('/projects/'+this.props.hypothesis.projectId);
    // Hypothesis.remove(this.props.hypothesis._id);
    $('#myModal').on('hide.bs.modal', function (e) {
      Meteor.call('navBack')
    })

    Hypothesis.remove(FlowRouter.getParam('hypothesisId'));


    $('#myModal').modal('toggle');

  },
  render(){
    return(
      <div>
        <div className="modal-body">
          <button type="button" className="btn btn-danger btn-block" onClick={this.removeHypothesis}><i className="fa fa-trash-o"></i> Delete Hypothesis</button>
        </div>
      </div>
    )
  }
})
