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

  render() {
    let hypothesi = this.props.hypothesis;

    return <li>
      <p>{hypothesi.name} - {hypothesi._id}</p>
      <p onClick={this.removeHypothesis}>delete</p>
      <p onClick={this.createTestCard}>create test card</p>
      <table className="table">
      <tbody>
      {this.data.TestCards.map(function(testCard){
        return <TestCardRow key={testCard._id} testCard={testCard} />
      })}
      </tbody>
      </table>
    </li>
  }

})
