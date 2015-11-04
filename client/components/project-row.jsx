// App component - represents the whole app
ProjectRow = React.createClass({

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
    console.log(location)
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
      <nav className="navbar">
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

      <AddHypothesisForm project={this.props.project} view="body" show={this.shouldRenderForm("body")}/>

      <div className="p-a">
          {
            this.data.hypothesis.map(function(hypothesis){
              return <HypothesisRow key={hypothesis._id} hypothesis={hypothesis} />;
            })
          }
      </div>


    </div>
  )
},


});


AddHypothesisForm = React.createClass({
  propTypes: {
    project: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      name:''
    }
  },

  createHypothesis() {
    Meteor.call('createHypothesis', this.props.project._id, this.state.name);
    this.setState({
      name:''
    })
  },

  handleChange(evt) {
      this.setState({
        name:evt.target.value
      });
  },
  componentDidUpdate() {
    let node = React.findDOMNode(this.refs.editFocus)
    node ? node.focus() : null;
  },
  componentDidMount() {
    let node = React.findDOMNode(this.refs.editFocus)
    node ? node.focus() : null;
  },
  handleKeyUp: function(e) {
    console.log(e.which)
    if(e.which === 13) {
      this.createHypothesis();
    }
 },
  renderFormInNav() {
    return(
      <div className="form-inline navbar-form pull-right">
          <div className="input-group">
            <input type="text" className="form-control" value={this.state.name} onKeyUp={this.handleKeyUp} onChange={this.handleChange} placeholder="new hypothesis" />
            <span className="input-group-btn">
                <button className="btn btn-secondary-outline" onClick={this.createHypothesis}><i className="fa fa-flask"></i> Add</button>
            </span>
          </div>
      </div>
    )
  },
  renderFormInBody() {
      return (
        <div className="card-block">
            <div className="input-group">
              <input ref="editFocus" onKeyUp={this.handleKeyUp} type="text" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="What is your first hypothesis?" />
              <span className="input-group-btn">
                  <button className="btn btn-primary-outline" onClick={this.createHypothesis}><i className="fa fa-flask"></i> Add</button>
              </span>
            </div>
        </div>
      )
  },
  renderForm() {
    return this.props.view==="nav" ? this.renderFormInNav() : this.renderFormInBody()
  },
  render(){
    return this.props.show ? this.renderForm() : null
  }
})







// <div className="container-fluid p-y">
//   <div className="row">
//     <div className="col-md-6">
//       <div className="form-group">
//         <label className="sr-only" >Hypothesis</label>
//         <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="What is your hypothesis" />
//       </div>
//
//     </div>
//     <div className="col-md-1">
//       <button className="btn btn-primary-outline btn-block" onClick={this.createHypothesis}><i className="fa fa-flask"></i> Add</button>
//     </div>
//   </div>
// </div>




// <div className="p-a">
//   <form className="form-inline">
//     <div className="form-group">
//       <label className="sr-only" for="exampleInputEmail3">Hypothesis</label>
//       <input type="text" className="form-control" id="" placeholder="What is your hypothesis" />
//     </div>
//
//   </form>
// </div>

// <div className="dropdown pull-right">
//   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Options
//   </button>
//   <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
//     <a className="dropdown-item" href="#" onClick={this.createHypothesis}>Add hypothesis</a>
//     <a className="dropdown-item" href="#" onClick={this.removeProject}>Remove Project</a>
//   </div>
