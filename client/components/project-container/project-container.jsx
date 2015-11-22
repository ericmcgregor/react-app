// App component - represents the whole app
ProjectContainer = React.createClass({

    propTypes: {
      project: React.PropTypes.object.isRequired
    },

    mixins: [ReactMeteorData],

    getMeteorData() {
      return {
        hypothesis: Hypothesis.find({projectId:this.props.project._id}, {
          sort:{
            created:-1
          }
        }).fetch(),
      }
    },



  shouldRenderForm(location) {
      if(this.data.hypothesis.length===0 && location==='body' ) {
        return true;
      }

      if(this.data.hypothesis.length>0 && location==='nav') {
        return true;
      }

      return false;
  },

  render() {
    return (
    <div className="container-fluid project-container m-y">

      <HypothesisContainer hypothesis={this.data.hypothesis}/>
        <ProjectHeader project={this.props.project} shouldRender={this.shouldRenderForm("nav")} />

    </div>
  )
},


});
// <ProjectHeader project={this.props.project} shouldRender={this.shouldRenderForm("nav")} />




// <div className="p-a">
//     {
//       this.data.hypothesis.map(function(hypothesis){
//         return <HypothesisContainer key={hypothesis._id} hypothesis={hypothesis} />;
//       })
//     }
// </div>
