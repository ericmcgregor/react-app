

ProjectListView = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      projects: Projects.find().fetch(),
      hypothesis:Hypothesis.find().fetch(),
      tests:TestCard.find().fetch(),
    }
  },
  componentDidMount() {
    Session.set({
      navtitle:'Projects',
      routeParent:'/projects'
    })
  },
  hypothesisCount(id) {
    return _.where(this.data.hypothesis, {projectId:id}).length;
  },
  testCount(id) {
    return _.filter(_.where(this.data.tests, {projectId:id}), function(item){
      return item.name ? item : null;
    }).length;
  },
  testCompleted(id){
    return _.where(this.data.tests, {projectId:id, state:'complete'}).length;
  },
  render(){
    return(

              <div className="container-fluid">
                  <div className="row m-y">
                    {
                      this.data.projects.map((project) => {
                        return(
                          <div key={project._id} className="col-lg-4 col-xs-12">
                          <div className="card">
                          <div className="card-block">
                            <h4 className="card-title"><a href={'/projects/'+project._id}>{project.name}</a></h4>
                            <div className="row">
                              <div className="col-md-4">
                                <p>hypothesis</p>
                                <h4>
                                  {this.hypothesisCount(project._id)}
                                </h4>
                              </div>
                              <div className="col-md-4">
                                <p>tests</p>
                                <h4>
                                  {this.testCount(project._id)}
                                </h4>
                              </div>
                              <div className="col-md-4">
                                <p>completed</p>
                                <h4>
                                  {this.testCompleted(project._id)}
                                </h4>
                              </div>
                            </div>
                          </div>
                          </div>
                          </div>
                        )
                      })
                    }

                </div>



                <ModalContainer modalId="myModal" modalTitle="Create Project" modalBody={<CreateProjectModal />}/>
                <ModalContainer modalId="settingsModal" modalTitle="Account Settings" modalBody={<SettingsView />}/>


              </div>



    )
  },

  renderList(){
    return (
      <div>
      <div className="row">
        <div className="col-xs-6">
          project
        </div>
        <div className="col-xs-2">
            hypothesis
        </div>
        <div className="col-xs-2">
            tests
        </div>
        <div className="col-xs-2">
            completed
        </div>
      </div>
      {
        this.data.projects.map((project) => {
          return(
            <div className="row" key={project._id}>
              <div className="col-xs-6">
                <a href={'/projects/'+project._id}>{project.name}</a>
              </div>
              <div className="col-xs-2">
                {this.hypothesisCount(project._id)}
              </div>
              <div className="col-xs-2">
                {this.testCount(project._id)}
              </div>
              <div className="col-xs-2">
                {this.testCompleted(project._id)}
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
})




                //
                // <hr></hr>
                // <a className="btn btn-primary btn-block" href="" data-toggle="modal" data-target="#myModal">
                //   Create Project
                // </a>
