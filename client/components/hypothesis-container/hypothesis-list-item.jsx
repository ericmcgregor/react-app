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
      <div className="row" onClick={this.props.toggleListView}>
        <div className="col-md-5 title">
          <h6 className="m-a-0" >{this.props.hypothesis.name}</h6>
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


        </div>
        <div className="col-md-1 row-options">
          {
            this.props.data.TestCards.map(function(testCard){
              return (
                <span key={testCard._id} className="label label-default">{testCard.state}</span>
              )
            })
          }
        </div>
      </div>
      </div>
    )
  }
});
