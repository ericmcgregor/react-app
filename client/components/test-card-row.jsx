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

  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;
    this.setState(state);

    TestCard.update({
      _id:this.props.testCard._id
    }, {
      $set:state
    });
  },

  handleLearningChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;
    this.setState(state);

    Learnings.update({
      _id:this.data.learningCard._id
    }, {
      $set:state
    });
  },

  getInitialState() {
    let testCard = this.props.testCard;
    let metric = this.props.testCard.metric;
    let observation = '';
    let cardStyle = {width:'30px'};
    let inactive = 'btn btn-secondary ';
    let active = inactive+'active';
    return {
      testCard,
      metric,
      observation,
      cardStyle,
      inactive,
      active
    }
  },

  componentDidMount() {
    this.setState({
      observation: this.data.learningCard.observation
    })
  },

  renderContent() {

    return <div className="card">
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
  },

  render() {

    return <div>
      {this.data.learningCard? this.renderContent() : <p>Loading...</p>}
    </div>


  }

})


// <h6 className="text-muted">We will verify this by...</h6>
// <fieldset className="form-group">
//   <textarea className="form-control"  rows="3" value={this.state.metric} onChange={this.handleChange.bind(this, 'metric', null)}></textarea>
// </fieldset>
// <div className="btn-group input-group btn-group-justified" role="group" aria-label="Basic example">
//   <button type="button" onClick={this.handleChange.bind(this, 'state', 'backlog')} className={this.props.testCard.state=="backlog" ? this.state.active : this.state.inactive }>backlog</button>
//   <button type="button" onClick={this.handleChange.bind(this, 'state', 'build')} className={this.props.testCard.state=="build" ? this.state.active : this.state.inactive }>build</button>
//   <button type="button" onClick={this.handleChange.bind(this, 'state', 'measure')} className={this.props.testCard.state=="measure" ? this.state.active : this.state.inactive }>measure</button>
// </div>





// <tr>
//   <td>{testCard.name} - {testCard._id}</td>
//   <td>{learningCard.observation}</td>
//   <td onClick={this.removeTestCard}>delete</td>
// </tr>
