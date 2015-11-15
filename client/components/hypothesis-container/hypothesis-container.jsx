HypothesisContainer = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.array.isRequired
  },

  shouldRenderForm(){
    if(this.props.hypothesis.length>0) {
      return false;
    }
    else {
      return true;
    }
  },

  render() {

    return (
      <div>
        <div className="hypothesis-row-header">
          <div className="row">
          <div className="col-md-5">hypothesis</div>
          <div className="col-md-3">test</div>
          <div className="col-md-3">results</div>
          </div>
        </div>

        {
          this.props.hypothesis.map(function(hypothesis){
            return <HypothesisListRow key={hypothesis._id} hypothesis={hypothesis} />
          })
        }

        <AddHypothesisForm view="body" show={this.shouldRenderForm()}/>

      </div>
    )
  }

})
