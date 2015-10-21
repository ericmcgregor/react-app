// App component - represents the whole app
ProjectRow = React.createClass({
  propTypes: {
    project: React.PropTypes.object.isRequired
  },
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {

    return {
      project:this.props.project,
      hypothesis: Hypothesis.find({projectId:this.props.project._id}, {
        sort:{
          '_id':1
        }
      }).fetch(),
    }
  },

  createHypothesis() {
    Meteor.call('createHypothesis', this.data.project._id, 'a cool new hypothesis')
  },


  render() {
    return <div>
      <h4>{this.data.project.name}</h4>
        <button onClick={this.createHypothesis}>create hypothesis</button>
        <ul>
        {
          this.data.hypothesis.map(function(hypothesis){
            return <HypothesisRow key={hypothesis._id} hypothesis={hypothesis} />;
          })
        }
        </ul>
    </div>

  }
});

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
      {this.data.TestCards.map(function(testCard){
        return <TestCardRow key={testCard._id} testCard={testCard} />
      })}
    </li>
  }

})


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


  render() {
    console.log(this.data)
    let testCard = this.props.testCard;
    let learningCard = this.data.learningCard;

    return <div>
      <p>{testCard.name} - {testCard._id}</p>
      <p>{learningCard.learning}</p>
      <p onClick={this.removeTestCard}>delete</p>
    </div>
  }

})
