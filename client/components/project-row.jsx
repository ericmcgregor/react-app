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


  render() {
    return <div className="p-a">
        {
          this.data.hypothesis.map(function(hypothesis){
            return <HypothesisRow key={hypothesis._id} hypothesis={hypothesis} />;
          })
        }
    </div>

  }
});
