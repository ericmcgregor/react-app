
TestCardHeader = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    let cardStyle = {width:'30px'};
    let testCard = this.props.testCard;
    let edit = false;
    return {
      cardStyle,
      testCard,
      edit
    }
  },

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
    }
  },

  handleChange(key, value, evt) {
    this.state.testCard[key] = evt.target.value
    this.setState(this.state);

    TestCard.update({
      _id:this.props.testCard._id
    }, {
      $set:_.pick(this.state.testCard, key)
    });
  },

  // componentDidUpdate() {
  //   let node = React.findDOMNode(this.refs.editName)
  //   node ? node.focus() : null;
  // },

  render() {
    return <div>
      <EditTestTitle title={this.props.testCard.name} handleChange={this.handleChange.bind(this, 'name', null)} />

      <div className="media">
        <a className="media-left" href="#">
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brunodesign1206/128.jpg" className="img-circle" style={this.state.cardStyle} />
        </a>
        <div className="media-body">
          <small className="text-muted">Person Name</small>
        </div>
      </div>

    </div>
  }
})
