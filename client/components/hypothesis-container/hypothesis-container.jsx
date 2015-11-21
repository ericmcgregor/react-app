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
  goDetail(hypothesis) {
    console.log('test')
    FlowRouter.go('project-details-hypothesis', {projectId:hypothesis.projectId, hypothesisId:hypothesis._id})
  },
  render() {

    return (
      <div>

        {
          this.props.hypothesis.map((hypothesis)=>{
            return (
              <HypothesisItem key={hypothesis._id} hypothesis={hypothesis} />
            )
          })
        }


        <AddHypothesisForm view="body" show={true}/>

      </div>
    )
  }

})




        // <div className="hypothesis-row-header">
        //   <div className="row">
        //   <div className="col-md-5">hypothesis</div>
        //   <div className="col-md-3">test</div>
        //   <div className="col-md-3">results</div>
        //   </div>
        // </div>
        //
        // {
        //   this.props.hypothesis.map(function(hypothesis){
        //     return <HypothesisListRow key={hypothesis._id} hypothesis={hypothesis} />
        //   })
        // }
