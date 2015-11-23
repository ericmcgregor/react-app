CreateProjectModal = React.createClass({
  getInitialState(){
    return {
      name:''
    }
  },
  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;
    this.setState(state)
  },
  handleAdd() {
    Projects.insert({name:this.state.name}, (err, id)=>{
      $('#myModal').on('hide.bs.modal', function (e) {
        FlowRouter.go('/projects/'+id);
      })

      this.setState({name:''});
      $('#myModal').modal('toggle')
    });

  },
  renderFooter() {
    return (
      <div>
        <button
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal">Close</button>
        <button onClick={this.handleAdd} className="btn btn-primary-outline">
          Create Project
        </button>
      </div>
    )
  },
  render(){
    return(
      <div>
        <div className="modal-body">
        <form>
          <fieldset className="form-group">
            <label htmlFor="projectName">
              Name your project
            </label>
            <input
              type="text"
              className="form-control"
              id="projectName"
              placeholder=""
              onChange={this.handleChange.bind(this, 'name', null)}
              />
          </fieldset>
        </form>

        </div>

        <ModalFooter content={this.renderFooter()} />

      </div>
    )
  }
})
