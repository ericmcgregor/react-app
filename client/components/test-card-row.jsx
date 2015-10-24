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
    let testCard = this.props.testCard;
    let learningCard = this.data.learningCard;
    if(!learningCard) {
      learningCard = {
        observation:''
      }
    }

    return <tr>
      <td>{testCard.name} - {testCard._id}</td>
      <td>{learningCard.observation}</td>
      <td onClick={this.removeTestCard}>delete</td>
    </tr>
  }

})
