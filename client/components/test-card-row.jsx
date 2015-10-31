TestCardRow = React.createClass({
  propTypes: {
    testCard: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      learningCard:Learnings.findOne({testCardId:this.props.testCard._id})
    }
  },

  removeTestCard() {
    TestCard.remove(this.props.testCard._id);
  },

  renderContent() {
    return (
      <div className="card">

        <div className="card-options" onClick={this.removeTestCard}></div>

        <div className="card-block">
          <div className="row">
            <div className="col-md-4">
              <TestCardHeader testCard={this.props.testCard}/>
            </div>
            <div className="col-md-4">
              <TestCardComponent testCard={this.props.testCard}/>
            </div>
            <div className="col-md-4">
              <LearningCard learningCard={this.data.learningCard} />
            </div>
          </div>
      </div>

    </div>
    )
  },

  render() {

    return <div>
      {this.data.learningCard? this.renderContent() : <p>Loading...</p>}
    </div>


  }

})
