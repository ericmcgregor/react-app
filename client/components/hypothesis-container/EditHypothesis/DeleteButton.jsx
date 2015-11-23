DeleteButton = React.createClass({
  propTypes: {
    handleDelete: React.PropTypes.func
  },
  getInitialState() {
    return {
      clicked:false
    }
  },
  toggleClick(){
    this.setState({
      clicked:!this.state.clicked
    })
  },
  renderButton() {
    return(
      <button onClick={this.toggleClick} className="btn btn-secondary-outline btn-sm m-r">
        delete <i className="fa fa-trash"></i>
      </button>
    )
  },
  renderConfirm() {
      return(
        <span>
          are you sure:
          <button onClick={this.props.handleDelete} className="btn btn-secondary-outline btn-sm m-r">
            yes
          </button>
        <button onClick={this.toggleClick} className="btn btn-secondary-outline btn-sm m-r">
          no
        </button>
        </span>
      )
  },
  render(){
    return (<span>{this.state.clicked===false ? this.renderButton() : this.renderConfirm()}</span>)
  }
})
