TestCardComponent = React.createClass({
  getInitialState() {
    let inactive = 'btn btn-secondary ';
    let active = inactive+'active';
    return {
      inactive,
      active
    }
  },

  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;

    TestCard.update({
      _id:this.props.testCard._id
    }, {
      $set:state
    });
  },

  render() {
    return (
      <div>
        <h6 className="text-muted">We will verify this by...</h6>
        <fieldset className="form-group">
          <textarea className="form-control"  rows="3" value={this.props.testCard.metric} onChange={this.handleChange.bind(this, 'metric', null)}></textarea>
        </fieldset>
        <div className="btn-group input-group btn-group-justified" role="group" aria-label="Basic example">
          <button type="button" onClick={this.handleChange.bind(this, 'state', 'backlog')} className={this.props.testCard.state=="backlog" ? this.state.active : this.state.inactive }>backlog</button>
          <button type="button"  onClick={this.handleChange.bind(this, 'state', 'build')} className={this.props.testCard.state=="build" ? this.state.active : this.state.inactive }>build</button>
          <button type="button"  onClick={this.handleChange.bind(this, 'state', 'measure')} className={this.props.testCard.state=="measure" ? this.state.active : this.state.inactive }>measure</button>
        </div>
      </div>
    )
  }
});
