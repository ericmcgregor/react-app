// App component - represents the whole app
ProjectDetailView = React.createClass({
  propTypes: {
    projectId: React.PropTypes.string.isRequired
  },
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  componentDidMount() {
    Session.set({
      navtitle:this.data.project.name,
      routeParent:'/projects'
    })
  },
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      project: Projects.findOne(this.props.projectId)
    }
  },

  render() {
    if(!this.data.project) return (<div></div>);
    return (
      <div>
      <ProjectContainer key={this.data.project._id} project={this.data.project} />
      <ModalContainer modalId="myModal" modalTitle="Project Options" modalBody={<ProjectOptionsModal />}/>
      </div>
    );
  }
});
