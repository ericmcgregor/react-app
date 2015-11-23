EditLearningCard = React.createClass({
  propTypes: {
    learningcard: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      observation:this.props.learningcard.observation,
      learning:this.props.learningcard.learning,
      next_steps:this.props.learningcard.next_steps,
      result:this.props.learningcard.result
    }
  },
  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;
    this.setState(state)
  },
  handleBlur(key, value, evt){
    let state = {}
    state[key] = value ? value : evt.target.value;
    Learnings.update({
      _id:this.props.learningcard._id
    }, {
      $set:state
    });
  },
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="testDescription">
            We observed:
          </label>
          <textarea
            className="form-control"
            id="testDescription"
            rows={3}
            value={this.state.observation}
            onChange={this.handleChange.bind(this, 'observation', null)}
            onBlur={this.handleBlur.bind(this, 'observation', null)}
            />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="testMetric">
            We learned:
          </label>
          <textarea
            className="form-control"
            id="testMetric"
            rows={3}
            value={this.state.learning}
            onChange={this.handleChange.bind(this, 'learning', null)}
            onBlur={this.handleBlur.bind(this, 'learning', null)}
            />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="testSuccss">
            Next steps:
          </label>
          <textarea
            className="form-control"
            id="testSuccss"
            rows={3}
            value={this.state.next_steps}
            onChange={this.handleChange.bind(this, 'next_steps', null)}
            onBlur={this.handleBlur.bind(this, 'next_steps', null)}
            />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="testStatus">
            Result:
          </label>
          <div
            id="testStatus"
            className="btn-group input-group btn-group-justified"
            role="group"
            aria-label="Basic example">
            <LearningCardResultSelect learning={this.props.learningcard} />
          </div>
        </fieldset>
      </form>
    )
  }
})
