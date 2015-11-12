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
    Projects.remove(this.props.project._id);
  },

  handleChangeNavTitle(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;

    Projects.update({
      _id:this.props.project._id
    }, {
      $set:state
    });
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
    <div>
      <nav className="navbar project-navbar">
        <EditNavTitleMixin title={this.props.project.name} handleChange={this.handleChangeNavTitle.bind(this, 'name', null)} />

      <form className="form-inline navbar-form pull-right m-l">
          <div className="form-group">
            <div className="btn-group pull-right btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary" onClick={this.removeProject}><i className="fa fa-trash-o"></i></button>
            </div>
          </div>
        </form>

        <AddHypothesisForm project={this.props.project} view="nav" show={this.shouldRenderForm("nav")} />

      </nav>
      {
        this.data.hypothesis.map(function(hypothesis){
          return <HypothesisContainerList key={hypothesis._id} hypothesis={hypothesis} />
        })
      }


      <AddHypothesisForm project={this.props.project} view="body" show={this.shouldRenderForm("body")}/>




    </div>
  )
},


});


// <div className="p-a">
//     {
//       this.data.hypothesis.map(function(hypothesis){
//         return <HypothesisContainer key={hypothesis._id} hypothesis={hypothesis} />;
//       })
//     }
// </div>
