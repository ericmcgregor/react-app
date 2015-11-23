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

    removeProject() {
      FlowRouter.go('/projects');

      Projects.remove(this.props.project._id, function(err, id){});
    },


  render() {
    return (
    <div className="container-fluid project-container m-y">

      <HypothesisContainer hypothesis={this.data.hypothesis}/>




    </div>
  )
},


});
// <ProjectHeader project={this.props.project} shouldRender={this.shouldRenderForm("nav")} />

// <ProjectHeader project={this.props.project} shouldRender={this.shouldRenderForm("nav")} />

// <button type="button" className="btn btn-danger btn-block" onClick={this.removeProject}><i className="fa fa-trash-o"></i> Delete Project</button>


// <div className="p-a">
//     {
//       this.data.hypothesis.map(function(hypothesis){
//         return <HypothesisContainer key={hypothesis._id} hypothesis={hypothesis} />;
//       })
//     }
// </div>
