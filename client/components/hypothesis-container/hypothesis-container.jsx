HypothesisContainer = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.array.isRequired
  },

  render() {

    return (
      <div>

        <AddHypothesisForm view="body" show={true}/>

        {
          this.props.hypothesis.map((hypothesis)=>{
            return (
              <HypothesisItem key={hypothesis._id} hypothesis={hypothesis} />
            )
          })
        }



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



        // HypothesisListItem = React.createClass({
        //
        //   handleChange(key, value, evt) {
        //     let state = {}
        //     state[key] = value ? value : evt.target.value;
        //
        //     Hypothesis.update({
        //       _id:this.props.hypothesis._id
        //     }, {
        //       $set:state
        //     });
        //   },
        //   render() {
        //     return (
        //       <div className="hypothesis-row">
        //       <div className="row" onClick={this.props.toggleListView}>
        //         <div className="col-md-5 title">
        //           <h6 className="m-a-0" >{this.props.hypothesis.name}</h6>
        //         </div>
        //         <div className="col-md-3">
        //           {
        //             this.props.data.TestCards.map(function(testCard){
        //               return (
        //                 <p key={testCard._id}>{testCard.name}</p>
        //               )
        //             })
        //           }
        //         </div>
        //
        //         <div className="col-md-3">
        //           {
        //             this.props.data.learningCard.map(function(learningCard){
        //               return (
        //                 <p className="m-a-0" key={learningCard._id}>{learningCard.observation}</p>
        //               )
        //             })
        //           }
        //
        //
        //         </div>
        //         <div className="col-md-1 row-options">
        //           {
        //             this.props.data.TestCards.map(function(testCard){
        //               return (
        //                 <span key={testCard._id} className="label label-default">{testCard.state}</span>
        //               )
        //             })
        //           }
        //         </div>
        //       </div>
        //       </div>
        //     )
        //   }
        // });

        // HypothesisListRow = React.createClass({
        //   mixins: [ReactMeteorData],
        //
        //   getInitialState() {
        //     return {
        //       listView:true
        //     }
        //   },
        //
        //   getMeteorData() {
        //     return {
        //       TestCards: TestCard.find({hypothesiId:this.props.hypothesis._id}).fetch(),
        //       learningCard:Learnings.find({hypothesiId:this.props.hypothesis._id}).fetch()
        //     }
        //   },
        //
        //   toggleListView() {
        //       this.setState({
        //         listView:!this.state.listView
        //       });
        //   },
        //
        //   renderListView() {
        //     return (
        //       <HypothesisListItem
        //         hypothesis={this.props.hypothesis}
        //         data={this.data}
        //         toggleListView={this.toggleListView}
        //         removeHypothesis={this.removeHypothesis}
        //         />
        //     )
        //   },
        //
        //   renderFullView() {
        //     return (
        //       <div className="hypothesis-row">
        //         <EditHypothesis
        //           hypothesis={this.props.hypothesis}
        //           testcards={this.data.TestCards}
        //           learningcards={this.data.learningCard}
        //           toggleListView={this.toggleListView}
        //           />
        //       </div>
        //     )
        //   },
        //
        //   render(){
        //     return this.state.listView === true ? this.renderListView() : this.renderFullView()
        //   }
        // });
