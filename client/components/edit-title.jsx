
EditHypothesisTitle = React.createClass({

  mixins: [EditMixin],

  renderEdit(target) {
    return  <fieldset className="form-group" onBlur={this.toggleEdit}>
      <input ref="editName" className="form-control" value={target} onChange={this.props.handleChange}/>
    </fieldset>
  },
  renderTitle(title) {
    return <h6 onClick={this.toggleEdit}>{title}</h6>
  },

  render() {
    return(
      <div>
        {this.state.edit ? this.renderEdit(this.props.title) : this.renderTitle(this.props.title)}
      </div>
    )
  }
})

EditTestTitle = React.createClass({

  mixins: [EditMixin],

  renderEdit(target) {
    return  <fieldset className="form-group" onBlur={this.toggleEdit}>
      <input ref="editName" className="form-control" value={target} onChange={this.props.handleChange}/>
    </fieldset>
  },
  renderTitle(title) {
    return <h5 onClick={this.toggleEdit}>Test: {title}</h5>
  },

  render() {
    return(
      <div>
        {this.state.edit ? this.renderEdit(this.props.title) : this.renderTitle(this.props.title)}
      </div>
    )
  }
})


EditNavTitleMixin = React.createClass({
  mixins: [EditMixin],

  renderEdit(target) {
    return  (
      <fieldset className="form-group pull-left m-a-0" onBlur={this.toggleEdit}>
        <input ref="editName" className="form-control" value={target} onChange={this.props.handleChange}/>
      </fieldset>
    )
  },
  renderTitle(title) {
    return <h3 className="navbar-brand" onClick={this.toggleEdit} href="#">{title}</h3>
  },

  render() {
    return(
      <div>
        {this.state.edit ? this.renderEdit(this.props.title) : this.renderTitle(this.props.title)}
      </div>
    )
  }
})
