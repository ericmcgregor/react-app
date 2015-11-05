
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
