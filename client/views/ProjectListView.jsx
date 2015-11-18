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
  hypothesisCount(id) {
    return _.where(this.data.hypothesis, {projectId:id}).length;
  },
  testCount(id) {
    return _.filter(_.where(this.data.tests, {projectId:id}), function(item){
      return item.name ? item : null;
    }).length;
  },
  testCompleted(id){
    return _.where(this.data.tests, {projectId:id, state:'backlog'}).length;
  },
  render(){
    return(
      <div id="app-container">

        <GlobalNav />

        <div id="app-content-layout">

          <div id="main-content-layout">
            <div>
              <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                project
              </div>
              <div className="col-md-2">
                  hypothesis
              </div>
              <div className="col-md-2">
                  tests
              </div>
              <div className="col-md-2">
                  completed
              </div>
            </div>
            {
              this.data.projects.map((project) => {
                return(
                  <div className="row" key={project._id}>
                    <div className="col-md-6">
                      <a href={'/projects/'+project._id}>{project.name}</a>
                    </div>
                    <div className="col-md-2">
                      {this.hypothesisCount(project._id)}
                    </div>
                    <div className="col-md-2">
                      {this.testCount(project._id)}
                    </div>
                    <div className="col-md-2">
                      {this.testCompleted(project._id)}
                    </div>
                  </div>
                )
              })
            }
            </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
})
