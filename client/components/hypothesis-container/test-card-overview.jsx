TestCardOverview = React.createClass({

  renderContent() {
    if(this.props.show===false || this.props.show === null) {
      return null;
    }

    return (
      <div className="card" onClick={this.props.toggleView}>
      <div className="card-block">
      <div className="row">
        <div className="col-md-4">
          <h5>{this.props.testCard.name}</h5>
        </div>
        <div className="col-md-4">
          <button className="btn btn-success-outline btn-block">{this.props.testCard.state}</button>
        </div>
        <div className="col-md-4">
          <p>{this.props.learningCard.observation}</p>
        </div>
      </div>
      </div>
      </div>
    )
  },
  render(){
    return this.renderContent()
  }
});
