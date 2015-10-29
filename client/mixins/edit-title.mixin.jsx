EditTitleMixin = React.createClass({
  componentWillMount() {
    this.setState({
      edit:false
    })
  },
  toggleEdit() {
    this.setState({
      edit:!this.state.edit
    })
  },
  handleChange() {

  },
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
