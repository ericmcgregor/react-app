FormFocusMixin = {
  componentDidUpdate() {
    let node = React.findDOMNode(this.refs.editFocus)
    node ? node.focus() : null;
  },
  componentDidMount() {
    let node = React.findDOMNode(this.refs.editFocus)
    node ? node.focus() : null;
  },
  handleKeyUp: function(e) {
    if(e.which === 13 && this.handleKeyEnter) {
      this.handleKeyEnter();
    }
    if(e.which === 27 && this.handleKeyEscape) {
      this.handleKeyEscape();
    }
 },
}
