LearningCard = React.createClass({
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
      _id:this.props.learningCard._id
    }, {
      $set:state
    });
  },

  render() {
    return (
      <div>
        <div>
          <h6 className="text-muted">We Observed:</h6>
          <fieldset className="form-group">
            <textarea className="form-control" rows="3" value={this.props.learningCard.observation} onChange={this.handleChange.bind(this, 'observation', null)}></textarea>
          </fieldset>
        </div>
        <div>
          <h6 className="text-muted">We Learned:</h6>
          <fieldset className="form-group">
            <textarea className="form-control" rows="3" value={this.props.learningCard.learning} onChange={this.handleChange.bind(this, 'learning', null)}></textarea>
          </fieldset>
        </div>
        <div>
          <h6 className="text-muted">Next Steps:</h6>
          <fieldset className="form-group">
            <textarea className="form-control" rows="3" value={this.props.learningCard.next_steps} onChange={this.handleChange.bind(this, 'next_steps', null)}></textarea>
          </fieldset>
        </div>
        <LearningCardResultSelect learning={this.props.learningCard} />
      </div>
    )
  }
});
