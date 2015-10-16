Meteor.subscribe('testCard')
Meteor.subscribe('learnings')
Meteor.subscribe('hypothesis')

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
      hypothesis: Hypothesis.find({projectId:this.props.project._id}).fetch(),
    }
  },

  renderHypothesis() {
    return this.data.hypothesis.map((hypothesi) => {
      return (<li key={hypothesi._id}>
        <p>{hypothesi.name} - {hypothesi._id}</p>
        <HypothesisRow key={hypothesi._id} hypothesis={hypothesi} />
      </li>);
    });
  },


  render() {
    return <div>
      <h4>{this.data.project.name}</h4>
        <ul>{this.renderHypothesis()}</ul>
    </div>

  }
});


HypothesisRow = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired
  },
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      hypothesis:this.props.hypothesis,
      TestCards: TestCard.find({hypothesiId:this.props.hypothesis._id}).fetch(),
      Learnings: Learnings.find({hypothesiId:this.props.hypothesis._id}).fetch()
    }
  },

  render() {
    return <div>
    <table>
    <tbody>
    {this.data.TestCards.map((test, index) => {
      return <tr key={test._id}>
          <td>{test.name}</td>
          <td>{this.data.Learnings[index].learning}</td>
        </tr>
    })}
    </tbody>
    </table>
    </div>
  }
});
