// App component - represents the whole app
ProjectDetailView = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    let projectId = FlowRouter.getParam('projectId');
    return {
      project: Projects.findOne(projectId)
    }
  },

  render() {
    return (
      <ProjectContainer key={this.data.project._id} project={this.data.project} />
    );
  }
});
