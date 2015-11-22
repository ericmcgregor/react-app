HypothesisItem = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      hypothesis: Hypothesis.findOne(this.props.hypothesis._id),
      TestCard: TestCard.findOne({hypothesiId:this.props.hypothesis._id}),
      learningCard:Learnings.findOne({hypothesiId:this.props.hypothesis._id})
    }
  },
  goDetail(hypothesis) {
    FlowRouter.go('project-details-hypothesis', {projectId:hypothesis.projectId, hypothesisId:hypothesis._id})
  },
  render() {
    if(!this.data.TestCard) return (<div></div>)
    return(
      <div className="card" onClick={this.goDetail.bind(this, this.props.hypothesis)}>
        <div className="card-block">
          <h4 className="card-title">{this.props.hypothesis.name}</h4>
          <p className="card-text">Test:  {this.data.TestCard.name}</p>
          <p className="card-text">Results:  We observed that such and such is true</p>
        </div>
      </div>
    )
  }
});
