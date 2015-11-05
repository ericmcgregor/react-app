EditMixin = {
  componentWillMount() {
    this.setState({
      edit:false
    })
  },
  componentDidUpdate() {
    let node = React.findDOMNode(this.refs.editName)
    node ? node.focus() : null;
  },
  toggleEdit() {
    this.setState({
      edit:!this.state.edit
    })
  },
}
