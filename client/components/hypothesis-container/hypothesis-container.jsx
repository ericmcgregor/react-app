HypothesisContainer = React.createClass({
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

    return (

      <div>
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-xs-8">
                <EditHypothesisTitle title={hypothesi.name} handleChange={this.handleChange.bind(this, 'name', null)}/>
              </div>
              <div className="col-xs-4">
                  <div className="btn-group pull-right">
                    <button type="button" className="btn btn-sm btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-bars"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item" onClick={this.toggleForm}>Create test card</a>
                      <div className="dropdown-divider"></div>
                      <a href="#" className="dropdown-item" onClick={this.removeHypothesis}>Remove hypothesis</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <AddTestCardForm hypothesis={this.props.hypothesis} show={this.shouldToggleForm()} toggleForm={this.toggleForm}/>

          <div className="card-block">
            {this.data.TestCards.map(function(testCard){
              return <TestCardContainer key={testCard._id} testCard={testCard} />
            })}
          </div>

        </div>
      </div>
    )
  }

})
