
GlobalNav = React.createClass({
  render() {
    return (
      <div id="global-nav-layout">
        <nav className="navbar navbar-light bg-faded">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/projects">Projects <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul className="nav navbar-nav pull-right">
            <AccountsUIWrapper />
          </ul>
        </nav>
      </div>
    )
  }
})
