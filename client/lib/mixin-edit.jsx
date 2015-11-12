EditMixin = {
  componentWillMount() {
    this.setState({
      edit:false
    })
  },
  componentDidUpdate() {
    let node = ReactDOM.findDOMNode(this.refs.editName)
    node ? node.focus() : null;
  },
  toggleEdit() {
    this.setState({
      edit:!this.state.edit
    })
  },
}
