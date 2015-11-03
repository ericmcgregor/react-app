HypothesisRow = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      showForm:false
    }
  },

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
    // Meteor.call('createTestCard', this.props.hypothesis._id);
    this.setState({
      showForm:!this.state.showForm
    })
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
  // componentWillUpdate(object, nextProps) {
  //   console.log(object, this.state, nextProps)
  //   if(this.state.TestCards.length !== nextProps.TestCards.length) {
  //     this.state.showForm = false;
  //   }
  // },
  shouldToggleForm() {

    if(this.data.TestCards.length === 0 || this.state.showForm === true) {
      return <div className="card-block"><AddTestCardForm hypothesis={this.props.hypothesis} /></div>;
    }
    return null;
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

        {this.shouldToggleForm()}

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
      <div className="input-group">
        <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="What is your Test" />
        <span className="input-group-btn">
            <button className="btn btn-primary-outline" onClick={this.createTestCard}><i className="fa fa-edit"></i> Add Test Card</button>
        </span>
      </div>
    )
  }
})
