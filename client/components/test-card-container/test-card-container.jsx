TestCardContainer = React.createClass({
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

  getInitialState() {
    return {
      view:this.props.testCard.test ? true : false
    }
  },
  removeTestCard() {
    TestCard.remove(this.props.testCard._id);
  },

  toggleView() {
    this.setState({
      view:!this.state.view
    })
  },
  renderContent() {
    if(!this.data.learningCard) {
      return null;
    }

    if(this.state.view===true) {
      return null;
    }

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
          <hr />
          <div className="row">
            <div className="col-md-4">
              <button onClick={this.toggleView} className="btn btn-primary-outline">save</button>
            </div>
          </div>
      </div>

    </div>
    )
  },

  render() {

    return <div>
      <TestCardOverview show={this.state.view} toggleView={this.toggleView} testCard={this.props.testCard} learningCard={this.data.learningCard} />

      {this.renderContent()}
    </div>


  }

})
