// App component - represents the whole app
ProjectRow = React.createClass({
  propTypes: {
    project: React.PropTypes.object.isRequired
  },
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {

    return {
      hypothesis: Hypothesis.find({projectId:this.props.project._id}, {
        sort:{
          '_id':1
        }
      }).fetch(),
    }
  },

  createHypothesis() {
    Meteor.call('createHypothesis', this.props.project._id, 'a cool new hypothesis')
  },


  render() {
    return <div>
      <h4>{this.props.project.name}</h4>
        <button onClick={this.createHypothesis}>create hypothesis</button>
        <ul>
        {
          this.data.hypothesis.map(function(hypothesis){
            return <HypothesisRow key={hypothesis._id} hypothesis={hypothesis} />;
          })
        }
        </ul>
    </div>

  }
});
