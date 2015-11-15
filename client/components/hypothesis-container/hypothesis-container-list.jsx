HypothesisListItem = React.createClass({
  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;

    Hypothesis.update({
      _id:this.props.hypothesis._id
    }, {
      $set:state
    });
  },
  render() {
    return (
      <div className="hypothesis-row">
      <div className="row">
        <div className="col-md-5 title">
          <h6 className="m-a-0" onClick={this.props.toggleListView}>{this.props.hypothesis.name}</h6>
        </div>
        <div className="col-md-3">
          {
            this.props.data.TestCards.map(function(testCard){
              return (
                <p key={testCard._id}>{testCard.name}</p>
              )
            })
          }
        </div>

        <div className="col-md-3">
          {
            this.props.data.learningCard.map(function(learningCard){
              return (
                <p className="m-a-0" key={learningCard._id}>{learningCard.observation}</p>
              )
            })
          }
          {
            this.props.data.TestCards.map(function(testCard){
              return (
                <span key={testCard._id} className="label label-default">{testCard.state}</span>
              )
            })
          }

        </div>
        <div className="col-md-1 row-options">
          <div className="btn-group" role="group" aria-label="">
            <button type="button" className="btn btn-sm btn-secondary">
              <i onClick={this.props.removeHypothesis} className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      </div>
    )
  }
});

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

  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;

    Hypothesis.update({
      _id:this.props.hypothesis._id
    }, {
      $set:state
    });
  },


  renderListView() {
    return (
      <HypothesisListItem
        hypothesis={this.props.hypothesis}
        data={this.data}
        toggleListView={this.toggleListView}
        removeHypothesis={this.removeHypothesis}
        />
    )
  },

  renderFullView() {
    return (
      <div className="">
        <nav className="navbar navbar-light bg-faded" hidden>

          <div className="form-inline navbar-form pull-right">
            <button onClick={this.toggleListView} className="btn btn-secondary-outline btn-sm">
              <i className="fa fa-times"></i>
            </button>
          </div>
        </nav>

        <div className="card-block">
          <h5 className="m-b-md" href="#">{this.props.hypothesis.name}</h5>


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
                      <button onClick={this.toggleListView}  className="btn btn-secondary-outline m-r">cancel</button>
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





//<h6 onClick={this.toggleListView}>{this.props.hypothesis.name}</h6>
