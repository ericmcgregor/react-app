HypothesisContainerList = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      listView:true
    }
  },
  removeHypothesis() {
    Hypothesis.remove(this.props.hypothesis._id);
  },
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      TestCards: TestCard.find({hypothesiId:this.props.hypothesis._id}).fetch(),
      learningCard:Learnings.find({hypothesiId:this.props.hypothesis._id}).fetch()
    }
  },

  toggleListView() {
      this.setState({
        listView:!this.state.listView
      });
  },

  renderListView() {
    return (
    <div className="row hypothesis-row">
      <div className="col-md-4">
        <h6 onClick={this.toggleListView}>{this.props.hypothesis.name}</h6>
      </div>
      <div className="col-md-3">
        {
          this.data.TestCards.map(function(testCard){
            return (
              <p key={testCard._id}>{testCard.name}</p>
            )
          })
        }
      </div>
      <div className="col-md-1">
        {
          this.data.TestCards.map(function(testCard){
            return (
              <div key={testCard._id} className="btn btn-sm btn-secondary-outline">{testCard.state}</div>
            )
          })
        }
      </div>
      <div className="col-md-3">
        {
          this.data.learningCard.map(function(learningCard){
            return (
              <p key={learningCard._id}>{learningCard.observation}</p>
            )
          })
        }
      </div>
      <div className="col-md-1 row-options">
        <button type="button" className="btn btn-sm btn-secondary">
          <i onClick={this.removeHypothesis} className="fa fa-trash"></i>
        </button>
      </div>
    </div>
    )
  },

  renderFullView() {
    return (
      <div className="card">
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">{this.props.hypothesis.name}</a>

          <div className="form-inline navbar-form pull-right">
            <button onClick={this.toggleListView} className="btn btn-secondary-outline btn-sm">
              <i className="fa fa-times"></i>
            </button>
          </div>
        </nav>

        <div className="card-block">
          {
            this.data.TestCards.length > 0 ? null : <AddTestCardForm hypothesis={this.props.hypothesis} show={true} />
          }

          {
            this.data.TestCards.map((testCard) => {
              return (
              <div key={testCard._id}>
                  <div className="row">
                    <div className="col-md-4">
                      <TestCardHeader testCard={testCard}/>
                    </div>
                    <div className="col-md-4">
                      <TestCardComponent testCard={testCard}/>
                    </div>
                    <div className="col-md-4">
                      {
                        this.data.learningCard.map(function(learningCard){
                          return (
                          <LearningCard key={learningCard._id} learningCard={learningCard} />
                          )
                        })
                      }
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4">
                      <button onClick={this.toggleListView}  className="btn btn-primary-outline m-r">save</button>
                      <button onClick={this.removeTestCard} className="btn btn-secondary-outline">remove test</button>
                    </div>
                  </div>
              </div>
              )
            })
          }

        </div>
      </div>
    )
  },

  render(){
    return this.state.listView === true ? this.renderListView() : this.renderFullView()
  }
});
