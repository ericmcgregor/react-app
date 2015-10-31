// App component - represents the whole app
ProjectRow = React.createClass({

    propTypes: {
      project: React.PropTypes.object.isRequired
    },

    mixins: [ReactMeteorData],

    getMeteorData() {
      return {
        hypothesis: Hypothesis.find({projectId:this.props.project._id}).fetch(),
      }
    },

  createHypothesis() {
    Meteor.call('createHypothesis', this.props.project._id);
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


  render() {
    return (
    <div>
      <nav className="navbar navbar-light bg-faded">
          <EditNavTitleMixin title={this.props.project.name} handleChange={this.handleChangeNavTitle.bind(this, 'name', null)} />
          <div className="dropdown pull-right">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Options
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <a className="dropdown-item" href="#" onClick={this.createHypothesis}>Add hypothesis</a>
              <a className="dropdown-item" href="#" onClick={this.removeProject}>Remove Project</a>
            </div>
          </div>
      </nav>

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
