
GlobalNav = React.createClass({
  mixins: [ReactMeteorData],
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      navtitle: Session.get('navtitle'),
    }
  },

  handleBack(){
    Meteor.call('navBack')
  },
  render() {
    return (
      <div id="global-nav-layout">
        <nav className="navbar  navbar-light bg-faded">

          <span className="navbar-brand" onClick={this.handleBack}>
            <button className="navbar-toggler" >
              <i className="fa fa-chevron-left" />
            </button>
            {this.data.navtitle}
          </span>

          {this.props.options}

        </nav>
      </div>
    )
  }
})

//<a className="nav-link" href="/projects">Projects <span className="sr-only">(current)</span></a>
