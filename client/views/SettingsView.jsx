SettingsView = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
    }
  },
  componentDidMount() {
    console.log(Session.get('routeParent'))

    Session.set({
      navtitle:'Settings',
      routeParent:null
    })
  },
  handleLogout(){
    Meteor.logout();
  },
  render(){
    return(
      <div className="container m-y">
          <button className="btn btn-primary" onClick={this.handleLogout}>logout</button>
      </div>
    )
  }
})
