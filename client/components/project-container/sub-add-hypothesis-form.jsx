
AddHypothesisForm = React.createClass({
  propTypes: {
    project: React.PropTypes.object.isRequired
  },

  mixins:[FormFocusMixin],

  getInitialState() {
    return {
      name:''
    }
  },

  createHypothesis() {
    Meteor.call('createHypothesis', this.props.project._id, this.state.name);
    this.setState({
      name:''
    })
  },

  handleChange(evt) {
      this.setState({
        name:evt.target.value
      });
  },

  handleKeyEnter() {
    return this.createHypothesis();
  },

  renderFormInNav() {
    return(
      <div className="form-inline navbar-form pull-right">
          <div className="input-group">
            <input type="text" className="form-control" value={this.state.name} onKeyUp={this.handleKeyUp} onChange={this.handleChange} placeholder="new hypothesis" />
            <span className="input-group-btn">
                <button className="btn btn-secondary-outline" onClick={this.createHypothesis}><i className="fa fa-flask"></i> Add</button>
            </span>
          </div>
      </div>
    )
  },
  renderFormInBody() {
      return (
        <div className="card-block">
            <div className="input-group">
              <input ref="editFocus" onKeyUp={this.handleKeyUp} type="text" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="What is your first hypothesis?" />
              <span className="input-group-btn">
                  <button className="btn btn-primary-outline" onClick={this.createHypothesis}><i className="fa fa-flask"></i> Add</button>
              </span>
            </div>
        </div>
      )
  },
  renderForm() {
    return this.props.view==="nav" ? this.renderFormInNav() : this.renderFormInBody()
  },
  render(){
    return this.props.show ? this.renderForm() : null
  }
})
