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
        <div>
          <h6 className="text-muted">We will verify this by:</h6>
          <fieldset className="form-group">
            <textarea className="form-control"  rows="3" value={this.props.testCard.test} onChange={this.handleChange.bind(this, 'test', null)}></textarea>
          </fieldset>
        </div>
        <div>
          <h6 className="text-muted">We will measure:</h6>
          <fieldset className="form-group">
            <textarea className="form-control"  rows="3" value={this.props.testCard.metric} onChange={this.handleChange.bind(this, 'metric', null)}></textarea>
          </fieldset>
        </div>
        <div>
          <h6 className="text-muted">We are right if:</h6>
          <fieldset className="form-group">
            <textarea className="form-control"  rows="3" value={this.props.testCard.criteria} onChange={this.handleChange.bind(this, 'criteria', null)}></textarea>
          </fieldset>
        </div>
        <TestCardStateSelect testCard={this.props.testCard} />
      </div>
    )
  }
});
