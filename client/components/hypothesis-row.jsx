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
