HypothesisRow = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      TestCards: TestCard.find({hypothesiId:this.props.hypothesis._id}, {
        sort:{
          '_id':1
        }
      }).fetch()
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
          <EditTitleMixin title={hypothesi.name} handleChange={this.handleChange.bind(this, 'name', null)}/>
          <a href="#" className="card-link" onClick={this.removeHypothesis}>Remove</a>
          <a href="#" className="card-link" onClick={this.createTestCard}>create test card</a>
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


      //
      // <p>{hypothesi.name} - {hypothesi._id}</p>
      // <p onClick={this.removeHypothesis}>delete</p>
      // <p onClick={this.createTestCard}>create test card</p>
      // <table className="table">
      // <tbody>
      // {this.data.TestCards.map(function(testCard){
      //   return <TestCardRow key={testCard._id} testCard={testCard} />
      // })}
      // </tbody>
      // </table>
