
GlobalNav = React.createClass({
  mixins: [ReactMeteorData],
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      navtitle: Session.get('navtitle'),
    }
  },

  toggleSideNav(){
    // let sidenav = Session.get('sidenav');
    // Session.set({
    //   sidenav:!sidenav
    // })
    history.back()
  },
  render() {
    return (
      <div id="global-nav-layout">
        <nav className="navbar  navbar-light bg-faded">

          <span className="navbar-brand" onClick={this.toggleSideNav}>
            <button className="navbar-toggler" >
              <i className="fa fa-chevron-left" />
            </button>
            {this.data.navtitle}
          </span>

          <ul className="nav navbar-nav pull-right">
            <li className="nav-item">
              <a href="" className="nav-link">
                settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
})

//<a className="nav-link" href="/projects">Projects <span className="sr-only">(current)</span></a>
