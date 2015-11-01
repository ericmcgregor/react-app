HypothesisRow = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      TestCards: TestCard.find({hypothesiId:this.props.hypothesis._id}).fetch()
    }
  },

  removeHypothesis() {
    Hypothesis.remove(this.props.hypothesis._id);
  },
  createTestCard() {
    Meteor.call('createTestCard', this.props.hypothesis._id);
  },

  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;

    Hypothesis.update({
      _id:this.props.hypothesis._id
    }, {
      $set:state
    });
  },

  render() {
    let hypothesi = this.props.hypothesis;
    // let
    return <div>

      <div className="card">
        <div className="card-block">
          <div className="row">
            <div className="col-xs-8">
              <EditHypothesisTitle title={hypothesi.name} handleChange={this.handleChange.bind(this, 'name', null)}/>
            </div>
            <div className="col-xs-4">
              <a href="#" className="card-link pull-right m-l" onClick={this.removeHypothesis}>Remove</a>
              <a href="#" className="card-link pull-right" onClick={this.createTestCard}>create test card</a>
            </div>
          </div>
        </div>
        <div className="card-block">

        {this.data.TestCards.length > 0 ? null : <AddTestCardForm hypothesis={this.props.hypothesis} />}



        </div>
        <div className="card-block">
          {this.data.TestCards.map(function(testCard){
            return <TestCardRow key={testCard._id} testCard={testCard} />
          })}
        </div>

      </div>

    </div>
  }

})

AddTestCardForm = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      name:''
    }
  },

  createTestCard() {
    Meteor.call('createTestCard', this.props.hypothesis._id, this.state.name);
    this.setState({
      name:''
    })
  },

  handleChange(evt) {
      this.setState({
        name:evt.target.value
      });
  },

  render(){
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="sr-only" >Test Card</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="What is your Test" />
          </div>

        </div>
        <div className="col-md-3">
          <button className="btn btn-primary-outline" onClick={this.createTestCard}><i className="fa fa-edit"></i> Add Test Card</button>
        </div>
      </div>
    )
  }
})
