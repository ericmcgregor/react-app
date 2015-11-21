// App component - represents the whole app
HypothesisDetailView = React.createClass({
  propTypes: {
    hypothesisId: React.PropTypes.string.isRequired
  },
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      hypothesis: Hypothesis.findOne(this.props.hypothesisId),
      TestCards: TestCard.find({hypothesiId:this.props.hypothesisId}).fetch(),
      learningCard:Learnings.find({hypothesiId:this.props.hypothesisId}).fetch()
    }
  },
  componentDidMount() {
    Session.set({
      navtitle:'edit hypothesis'
    })
  },
  render() {
    console.log(this.data)
    if(!this.data.hypothesis) return (<div></div>);
    return (
      <div className="container-fluid">
      <EditHypothesis
        hypothesis={this.data.hypothesis}
        testcards={this.data.TestCards}
        learningcards={this.data.learningCard}
        />
      </div>
    );
  }
});
