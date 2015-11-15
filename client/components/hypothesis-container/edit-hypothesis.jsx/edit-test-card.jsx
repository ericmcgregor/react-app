EditTestCard = React.createClass({
  propTypes: {
    testcard: React.PropTypes.object.isRequired,
    learningcards: React.PropTypes.array.isRequired
  },
  getInitialState() {
    return {
      name:this.props.testcard.name,
      test:this.props.testcard.test,
      metric:this.props.testcard.metric,
      criteria:this.props.testcard.criteria,
      state:this.props.testcard.state
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
    TestCard.update({
      _id:this.props.testcard._id
    }, {
      $set:state
    });
  },
  render(){
    return (
      <div id="edit-test-card">
        <div className="row">
          <div className="col-md-12">
            <form>
              <fieldset className="form-group">
                <label htmlFor="testName">Test</label>
                <textarea
                  className="form-control"
                  id="testName"
                  placeholder="Name your test"
                  rows={2}
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, 'name', null)}
                  onBlur={this.handleBlur.bind(this, 'name', null)}
                  />
              </fieldset>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <form>
              <fieldset className="form-group">
                <label htmlFor="testDescription">
                  We will:
                </label>
                <textarea
                  className="form-control"
                  id="testDescription"
                  rows={3}
                  value={this.state.test}
                  onChange={this.handleChange.bind(this, 'test', null)}
                  onBlur={this.handleBlur.bind(this, 'test', null)}
                  />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="testMetric">
                  We will measure:
                </label>
                <textarea
                  className="form-control"
                  id="testMetric"
                  rows={3}
                  value={this.state.metric}
                  onChange={this.handleChange.bind(this, 'metric', null)}
                  onBlur={this.handleBlur.bind(this, 'metric', null)}
                  />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="testSuccss">
                  We are right if:
                </label>
                <textarea
                  className="form-control"
                  id="testSuccss"
                  rows={3}
                  value={this.state.criteria}
                  onChange={this.handleChange.bind(this, 'criteria', null)}
                  onBlur={this.handleBlur.bind(this, 'criteria', null)}
                  />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="testStatus">
                  Current status:
                </label>
                <div
                  id="testStatus"
                  className="btn-group input-group btn-group-justified"
                  role="group"
                  aria-label="Basic example">

                  <TestCardStateSelect testCard={this.props.testcard}/>

                </div>
              </fieldset>

            </form>

          </div>
          <div className="col-md-6">
            {
              this.props.learningcards.map(function(learningcard){
                return <EditLearningCard key={learningcard._id} learningcard={learningcard}/>
              })
            }
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    )
  }
})
