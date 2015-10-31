LearningCardResultSelect = React.createClass({
  propTypes: {
    learning: React.PropTypes.object.isRequired
  },
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

    Learnings.update({
      _id:this.props.learning._id
    }, {
      $set:state
    });
  },

  render() {
    return (
        <div className="btn-group input-group btn-group-justified" role="group" aria-label="Basic example">
          <button type="button" onClick={this.handleChange.bind(this, 'result', 'valid')} className={this.props.learning.result=="valid" ? this.state.active : this.state.inactive }>valid</button>
          <button type="button"  onClick={this.handleChange.bind(this, 'result', 'inconclusive')} className={this.props.learning.result=="inconclusive" ? this.state.active : this.state.inactive }>inconclusive</button>
          <button type="button"  onClick={this.handleChange.bind(this, 'result', 'wrong')} className={this.props.learning.result=="wrong" ? this.state.active : this.state.inactive }>wrong</button>
        </div>
    )
  }
});
