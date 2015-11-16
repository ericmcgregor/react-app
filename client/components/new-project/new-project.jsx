NewProjectView = React.createClass({
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
      this.setState({name:''});
      FlowRouter.go('/projects/'+id);

    });

  },
  render(){
    return(
      <div className="container-fluid">
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
      <button onClick={this.handleAdd} className="btn btn-primary-outline">
        Create Project
      </button>
      </div>
    )
  }
})
