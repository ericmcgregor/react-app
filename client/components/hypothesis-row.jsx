HypothesisRow = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      showForm:null
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


  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;

    Hypothesis.update({
      _id:this.props.hypothesis._id
    }, {
      $set:state
    });
  },

  shouldToggleForm() {
    if(this.data.TestCards.length === 0 || this.state.showForm === true) {
      return true;
    }
    return false;
  },

  toggleForm() {
    let state = !this.state.showForm;
    this.setState({
      showForm:state
    });
  },
  render() {
    let hypothesi = this.props.hypothesis;

    return <div>

      <div className="card">
        <div className="card-block">
          <div className="row">
            <div className="col-xs-8">
              <EditHypothesisTitle title={hypothesi.name} handleChange={this.handleChange.bind(this, 'name', null)}/>
            </div>
            <div className="col-xs-4">
              <a href="#" className="card-link pull-right m-l" onClick={this.removeHypothesis}>Remove</a>
              <a href="#" className="card-link pull-right" onClick={this.toggleForm}>create test card</a>
            </div>
          </div>
        </div>

        <AddTestCardForm hypothesis={this.props.hypothesis} show={this.shouldToggleForm()} toggleForm={this.toggleForm}/>

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
    this.props.toggleForm(false);
  },

  handleChange(evt) {
      this.setState({
        name:evt.target.value
      });
  },
  componentDidUpdate() {
    let node = React.findDOMNode(this.refs.editFocus)
    node ? node.focus() : null;
  },
  componentDidMount() {
    let node = React.findDOMNode(this.refs.editFocus)
    node ? node.focus() : null;
  },
  handleKeyUp: function(e) {
    if(e.which === 13) {
      this.createTestCard();
    }
    if(e.which === 27) {
      this.props.toggleForm(false);
    }
 },
  renderForm() {
    return (
      <div className="card-block">
      <div className="input-group">
        <input onKeyUp={this.handleKeyUp} ref="editFocus" type="text" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="What is your Test" />
        <span className="input-group-btn">
            <button className="btn btn-primary-outline" onClick={this.createTestCard}><i className="fa fa-edit"></i> Add Test Card</button>
        </span>
      </div>
      </div>
    )
  },

  render(){
    return this.props.show ? this.renderForm() : null
  }
})
