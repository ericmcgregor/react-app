

EditHypothesis = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired,
    testcards: React.PropTypes.array.isRequired,
    learningcards: React.PropTypes.array,
    toggleListView: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      learningcards:[]
    }
  },
  getInitialState() {
    return {
      name:this.props.hypothesis.name
    }
  },
  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;
    this.setState(state)
  },
  handleBlur(key, value, evt){
    let state = {}
    state[key] = value ? value : evt.target.value;
    Hypothesis.update({
      _id:this.props.hypothesis._id
    }, {
      $set:state
    });
  },
  removeHypothesis() {
    Hypothesis.remove(this.props.hypothesis._id);
  },
  render(){
    return(
      <div className="">
          <nav className="navbar navbar-light bg-faded m-b-md">
            <span className="navbar-brand">edit hypothesis</span>

            <div className="form-inline navbar-form pull-right">
              <DeleteButton handleDelete={this.removeHypothesis}/>
              <button onClick={this.props.toggleListView} className="btn btn-secondary-outline btn-sm">
                close <i className="fa fa-times"></i>
              </button>
            </div>
          </nav>
        <div className="row">
          <div className="col-md-12">
            <form>
              <fieldset className="form-group">
                <label htmlFor="hypothesisName">
                  Hypothesis
                </label>
                <textarea
                  className="form-control"
                  id="hypothesisName"
                  placeholder="Your hypothesis"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, 'name', null)}
                  onBlur={this.handleBlur.bind(this, 'name', null)}
                  rows={2} />
              </fieldset>
            </form>
          </div>
        </div>

        <br />
        <hr />

        {
          this.props.testcards.map((testcard)=>{
            return <EditTestCard key={testcard._id} testcard={testcard} learningcards={this.props.learningcards} />
          })
        }


      </div>

    )
  }
})
