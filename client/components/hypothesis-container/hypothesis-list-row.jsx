HypothesisListRow = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      listView:true
    }
  },

  getMeteorData() {
    return {
      TestCards: TestCard.find({hypothesiId:this.props.hypothesis._id}).fetch(),
      learningCard:Learnings.find({hypothesiId:this.props.hypothesis._id}).fetch()
    }
  },

  toggleListView() {
      this.setState({
        listView:!this.state.listView
      });
  },

  renderListView() {
    return (
      <HypothesisListItem
        hypothesis={this.props.hypothesis}
        data={this.data}
        toggleListView={this.toggleListView}
        removeHypothesis={this.removeHypothesis}
        />
    )
  },

  renderFullView() {
    return (
      <div className="hypothesis-row">
        <EditHypothesis
          hypothesis={this.props.hypothesis}
          testcards={this.data.TestCards}
          learningcards={this.data.learningCard}
          toggleListView={this.toggleListView}
          />
      </div>
    )
  },

  render(){
    return this.state.listView === true ? this.renderListView() : this.renderFullView()
  }
});
